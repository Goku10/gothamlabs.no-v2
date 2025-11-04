import { useState, FormEvent } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { submitContactForm } from '../lib/supabase';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    brief_goal: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    const lastSubmit = localStorage.getItem('lastContactSubmit');
    if (lastSubmit) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit);
      if (timeSinceLastSubmit < 60000) {
        setSubmitStatus('error');
        setErrorMessage('Please wait a minute before submitting again.');
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        project_type: formData.project_type,
        brief_goal: formData.brief_goal,
      });

      localStorage.setItem('lastContactSubmit', Date.now().toString());

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project_type: '',
        brief_goal: '',
        honeypot: '',
      });

      const trackEvent = new CustomEvent('track', {
        detail: { event: 'form_submit', location: 'contact_modal' },
      });
      window.dispatchEvent(trackEvent);

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or email hello@gothamlabs.io.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Start a project">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gotham-200 mb-2">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-gotham-950 border border-gotham-700 rounded-gotham text-gotham-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gotham-200 mb-2">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 bg-gotham-950 border border-gotham-700 rounded-gotham text-gotham-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="project_type" className="block text-sm font-medium text-gotham-200 mb-2">
            Project type
          </label>
          <select
            id="project_type"
            required
            value={formData.project_type}
            onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
            className="w-full px-4 py-2 bg-gotham-950 border border-gotham-700 rounded-gotham text-gotham-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          >
            <option value="">Select a type</option>
            <option value="Dashboard">Dashboard</option>
            <option value="Automation">Automation</option>
            <option value="Generative Media">Generative Media</option>
            <option value="Assistant">Assistant</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="brief_goal" className="block text-sm font-medium text-gotham-200 mb-2">
            Brief goal
          </label>
          <textarea
            id="brief_goal"
            required
            rows={4}
            value={formData.brief_goal}
            onChange={(e) => setFormData({ ...formData, brief_goal: e.target.value })}
            className="w-full px-4 py-2 bg-gotham-950 border border-gotham-700 rounded-gotham text-gotham-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Tell us what you're trying to achieve..."
            disabled={isSubmitting}
          />
        </div>

        <input
          type="text"
          name="website"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 text-success bg-success/10 px-4 py-3 rounded-gotham">
            <CheckCircle size={20} />
            <span>Thanks — we'll be in touch shortly.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-start gap-2 text-danger bg-danger/10 px-4 py-3 rounded-gotham">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div>
          <Button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
        </div>

        <div className="text-center text-sm text-gotham-400 pt-4 border-t border-gotham-800">
          <Mail className="inline-block mr-2" size={16} />
          Or email us at{' '}
          <a
            href="mailto:hello@gothamlabs.io"
            className="text-primary hover:text-primary/90 underline"
          >
            hello@gothamlabs.io
          </a>
        </div>

        <p className="text-xs text-gotham-500 text-center">
          We reply within 24 hours. Your info stays private.
        </p>
      </form>
    </Modal>
  );
}
