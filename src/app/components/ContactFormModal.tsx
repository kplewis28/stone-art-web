import { useForm } from 'react-hook-form@7.55.0';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useContactModal } from '../contexts/ContactModalContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { Mail, Send, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactFormModal() {
  const { isOpen, closeModal } = useContactModal();
  const { language } = useLanguage();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Enviar usando Formspree
      const response = await fetch('https://formspree.io/f/mvgeqapn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New Contact Request from ${data.name} - Stone Art Precision`
        })
      });

      if (response.ok) {
        toast.success(
          language === 'en' 
            ? 'Message sent successfully! We\'ll get back to you soon.' 
            : 'Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.'
        );
        reset();
        setTimeout(() => closeModal(), 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(
        language === 'en' 
          ? 'Failed to send message. Please try again.' 
          : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[500px] max-w-[95vw] max-h-[90vh] overflow-y-auto bg-white border-2 border-[#D9A441]/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#071E20] text-xl sm:text-2xl">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9A441]" />
            {language === 'en' ? 'Get in Touch' : 'Kontaktieren Sie uns'}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            {language === 'en' 
              ? 'Fill out the form below and we\'ll get back to you as soon as possible.'
              : 'Füllen Sie das Formular aus und wir melden uns so schnell wie möglich bei Ihnen.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#071E20] text-sm">
              {language === 'en' ? 'Name' : 'Name'} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder={language === 'en' ? 'Your name' : 'Ihr Name'}
              {...register('name', { required: true })}
              className={`border-gray-300 focus:border-[#D9A441] focus:ring-[#D9A441] ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm">
                {language === 'en' ? 'Name is required' : 'Name ist erforderlich'}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#071E20] text-sm">
              {language === 'en' ? 'Email' : 'E-Mail'} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={language === 'en' ? 'youremail@example.com' : 'ihreemail@beispiel.com'}
              {...register('email', { 
                required: language === 'en' ? 'Email is required' : 'E-Mail ist erforderlich',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: language === 'en' ? 'Please enter a valid email' : 'Bitte geben Sie eine gültige E-Mail ein'
                }
              })}
              className={`border-gray-300 focus:border-[#D9A441] focus:ring-[#D9A441] ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.email.message || (language === 'en' ? 'Valid email is required' : 'Gültige E-Mail ist erforderlich')}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#071E20] text-sm">
              {language === 'en' ? 'Message' : 'Nachricht'} <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder={language === 'en' ? 'Tell us about your project...' : 'Erzählen Sie uns von Ihrem Projekt...'}
              rows={4}
              {...register('message', { required: true })}
              className={`border-gray-300 focus:border-[#D9A441] focus:ring-[#D9A441] resize-none ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs sm:text-sm">
                {language === 'en' ? 'Message is required' : 'Nachricht ist erforderlich'}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                reset();
                closeModal();
              }}
              className="w-full sm:flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
            >
              {language === 'en' ? 'Cancel' : 'Abbrechen'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#D9A441] text-[#071E20] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#D9A441] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:shadow-[0_0_30px_rgba(217,164,65,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span className="tracking-[0.5px] uppercase text-xs sm:text-sm">
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'Senden...') 
                  : (language === 'en' ? 'Send' : 'Senden')
                }
              </span>
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}