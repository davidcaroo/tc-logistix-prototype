import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  nombre: z.string().min(3, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(7, 'Teléfono requerido'),
  ciudad: z.string().min(2, 'Ciudad requerida'),
  mensaje: z.string().optional(),
  cv: z
    .instanceof(FileList)
    .refine((f) => f.length > 0, 'Adjunta tu hoja de vida')
    .refine((f) => f[0]?.size < 5_000_000, 'Máximo 5MB')
    .refine(
      (f) => ['application/pdf', 'application/msword',
               'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
              .includes(f[0]?.type),
      'Solo PDF o Word'
    ),
});

type FormData = z.infer<typeof schema>;

type Status = 'idle' | 'loading' | 'success' | 'error';

interface PostulacionFormProps {
  vacanteId: string;
  vacanteTitulo: string;
  contactoEmail: string;
  onBack: () => void;
  onSuccess: () => void;
}

export function PostulacionForm({
  vacanteId,
  vacanteTitulo,
  contactoEmail,
  onBack,
  onSuccess,
}: PostulacionFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('vacanteId', vacanteId);
      formData.append('nombre', data.nombre);
      formData.append('email', data.email);
      formData.append('telefono', data.telefono);
      formData.append('ciudad', data.ciudad);
      if (data.mensaje) formData.append('mensaje', data.mensaje);
      formData.append('cv', data.cv[0]);

      const res = await fetch('/api/postulacion', { method: 'POST', body: formData });
      if (!res.ok) throw new Error();
      setStatus('success');
      setTimeout(onSuccess, 2500);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          <CheckCircle size={56} className="text-[#FF6B00]" />
        </motion.div>
        <h3 className="font-display text-2xl text-white uppercase tracking-wider">
          ¡Postulación Enviada!
        </h3>
        <p className="text-[#888] text-sm max-w-xs">
          Nos pondremos en contacto contigo pronto. Revisa tu correo{' '}
          <span className="text-[#FF6B00]">{contactoEmail}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="text-[#888] hover:text-white transition-colors"
          aria-label="Volver al detalle"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <p className="text-[#FF6B00] text-xs font-mono tracking-widest uppercase">Postulación</p>
          <h3 className="font-display text-xl text-white uppercase">{vacanteTitulo}</h3>
        </div>
      </div>

      {/* Campos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nombre completo" error={errors.nombre?.message}>
          <input {...register('nombre')} placeholder="Tu nombre" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register('email')} type="email" placeholder="tu@email.com" />
        </Field>
        <Field label="Teléfono" error={errors.telefono?.message}>
          <input {...register('telefono')} placeholder="+57 300 000 0000" />
        </Field>
        <Field label="Ciudad" error={errors.ciudad?.message}>
          <input {...register('ciudad')} placeholder="Cartagena" />
        </Field>
      </div>

      <Field label="Mensaje (opcional)" error={undefined}>
        <textarea {...register('mensaje')} rows={3} placeholder="Cuéntanos algo sobre ti..." />
      </Field>

      <Field label="Hoja de vida (PDF o Word, máx 5MB)" error={errors.cv?.message}>
        <input {...register('cv')} type="file" accept=".pdf,.doc,.docx" />
      </Field>

      {/* Error global */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-sm text-center"
          >
            Error al enviar. Intenta de nuevo o escríbenos a {contactoEmail}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        className="
          relative w-full py-4 bg-[#FF6B00] text-black
          font-display text-xl tracking-widest uppercase
          disabled:opacity-70 disabled:cursor-not-allowed
          overflow-hidden group
        "
        whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          group-hover:translate-x-full transition-transform duration-700
        " />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
          {status === 'loading' ? 'Enviando...' : 'Confirmar Postulación →'}
        </span>
      </motion.button>
    </form>
  );
}

// ── Field wrapper ────────────────────────────────────────────────────
function Field({ label, error, children }: {
  label: string;
  error?: string;
  children: React.ReactElement;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono tracking-widest text-[#888] uppercase">{label}</label>
      {React.cloneElement(children as React.ReactElement<any>, {
        className: `
          w-full bg-[#1C1C1C] border px-4 py-3 text-sm text-white
          placeholder:text-[#444] outline-none
          focus:border-[#FF6B00] transition-colors duration-200
          ${error ? 'border-red-500' : 'border-[#2A2A2A]'}
          ${(children as any).props.className ?? ''}
        `,
      })}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-xs"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
