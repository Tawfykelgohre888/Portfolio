import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-32 relative overflow-hidden">
      <!-- Big BG text -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span class="font-display font-800 text-[20rem] text-white opacity-[0.015] select-none leading-none">
          Hi
        </span>
      </div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
           style="background: linear-gradient(90deg, transparent, rgba(255,107,53,0.4), transparent)"></div>

      <div class="max-w-6xl mx-auto px-6">

        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <p class="section-label mb-3">Get in touch</p>
          <h2 class="font-display font-800 text-4xl md:text-6xl text-white mb-4">
            Let's <span class="grad-text text-glow">Work Together</span>
          </h2>
          <p class="font-body text-base text-white/50 max-w-xl mx-auto">
            Open to new opportunities, freelance projects, and collaborations.
            Drop a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-10 items-start">

          <!-- Left info -->
          <div class="lg:col-span-2 space-y-6 reveal">
            @for (item of contactInfo; track item.label) {
              <div class="flex items-center gap-4 p-4 rounded-2xl border border-white/5"
                   style="background: rgba(30,38,64,0.5)">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                     style="background: rgba(255,107,53,0.12)">
                  {{ item.icon }}
                </div>
                <div>
                  <p class="font-body text-xs text-white/40">{{ item.label }}</p>
                  <p class="font-body text-sm text-white/80 font-500">{{ item.value }}</p>
                </div>
              </div>
            }

            <!-- Social links -->
            <div class="pt-2">
              <p class="font-body text-xs text-white/30 mb-4 uppercase tracking-widest">Find me on</p>
              <div class="flex gap-3">
                @for (social of socials; track social.label) {
                  <a [href]="social.url" target="_blank"
                     class="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/40
                            hover:border-brand/50 hover:text-brand transition-all duration-200 text-lg">
                    {{ social.icon }}
                  </a>
                }
              </div>
            </div>
          </div>

          <!-- Contact form -->
          <div class="lg:col-span-3 reveal delay-200">
            <div class="rounded-3xl p-8 border border-white/8"
                 style="background: linear-gradient(135deg, rgba(30,38,64,0.9) 0%, rgba(14,18,32,0.9) 100%)">
              @if (!submitted()) {
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                  <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label class="font-body text-xs text-white/40 block mb-2">Your Name</label>
                      <input type="text" name="name" [(ngModel)]="form.name" required
                             class="w-full px-4 py-3 rounded-xl border border-white/8 font-body text-sm text-white
                                    focus:border-brand/50 focus:outline-none transition-colors"
                             style="background: rgba(255,255,255,0.04);"
                             placeholder="Ahmed Mohamed">
                    </div>
                    <div>
                      <label class="font-body text-xs text-white/40 block mb-2">Email Address</label>
                      <input type="email" name="email" [(ngModel)]="form.email" required
                             class="w-full px-4 py-3 rounded-xl border border-white/8 font-body text-sm text-white
                                    focus:border-brand/50 focus:outline-none transition-colors"
                             style="background: rgba(255,255,255,0.04);"
                             placeholder="ahmed@example.com">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="font-body text-xs text-white/40 block mb-2">Subject</label>
                    <input type="text" name="subject" [(ngModel)]="form.subject"
                           class="w-full px-4 py-3 rounded-xl border border-white/8 font-body text-sm text-white
                                  focus:border-brand/50 focus:outline-none transition-colors"
                           style="background: rgba(255,255,255,0.04);"
                           placeholder="Project Collaboration">
                  </div>
                  <div class="mb-6">
                    <label class="font-body text-xs text-white/40 block mb-2">Message</label>
                    <textarea name="message" [(ngModel)]="form.message" required rows="5"
                              class="w-full px-4 py-3 rounded-xl border border-white/8 font-body text-sm text-white
                                     focus:border-brand/50 focus:outline-none transition-colors resize-none"
                              style="background: rgba(255,255,255,0.04);"
                              placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" [disabled]="contactForm.invalid"
                          class="w-full py-3.5 rounded-xl bg-brand text-white font-body font-600 text-sm
                                 hover:bg-brand-lt transition-all duration-200 glow-brand
                                 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </button>
                </form>
              } @else {
                <div class="text-center py-12">
                  <div class="text-5xl mb-4">🎉</div>
                  <h3 class="font-display font-700 text-xl text-white mb-2">Message Sent!</h3>
                  <p class="font-body text-sm text-white/50">Thanks for reaching out. I'll reply within 24 hours.</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  submitted = signal(false);
  form = { name: '', email: '', subject: '', message: '' };

  contactInfo = [
    { icon: '📧', label: 'Email',    value: 'tawfykelgohre8@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Cairo, Egypt' },
    { icon: '💼', label: 'Status',   value: 'Open to opportunities' },
  ];

  socials = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/tawfik-elgohre' },
    { icon: '🐙', label: 'GitHub',   url: 'https://github.com/Tawfykelgohre888' },
  ];

  onSubmit() {
    // In production, wire this to an email service (EmailJS, Formspree, etc.)
    this.submitted.set(true);
  }
}
