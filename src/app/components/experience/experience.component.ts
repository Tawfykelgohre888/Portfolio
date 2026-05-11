import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-32 relative overflow-hidden">
      <div class="absolute top-1/2 -left-48 w-96 h-96 rounded-full opacity-8 pointer-events-none"
           style="background: radial-gradient(circle, #FF6B35 0%, transparent 70%); filter: blur(80px)"></div>

      <div class="max-w-4xl mx-auto px-6">

        <!-- Header -->
        <div class="mb-16 reveal">
          <p class="section-label mb-3">Where I've worked</p>
          <h2 class="font-display font-800 text-4xl md:text-5xl text-white">
            Work <span class="grad-text">Experience</span>
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-5 top-2 bottom-2 w-px"
               style="background: linear-gradient(to bottom, #FF6B35, rgba(255,107,53,0.1))"></div>

          <div class="space-y-12">
            @for (exp of experiences; track exp.company; let i = $index) {
              <div class="reveal flex gap-8" [style.animation-delay]="i * 0.15 + 's'">
                <!-- Timeline dot -->
                <div class="relative flex-shrink-0">
                  <div class="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 relative"
                       [style.background]="exp.current ? 'rgba(255,107,53,0.2)' : 'rgba(30,38,64,0.9)'"
                       [style.border-color]="exp.current ? '#FF6B35' : 'rgba(255,255,255,0.1)'">
                    <span class="text-sm">{{ exp.icon }}</span>
                  </div>
                  @if (exp.current) {
                    <div class="absolute inset-0 rounded-full border-2 border-brand opacity-40 animate-ping"></div>
                  }
                </div>

                <!-- Content -->
                <div class="flex-1 pb-4">
                  <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 class="font-display font-700 text-xl text-white">{{ exp.role }}</h3>
                      <p class="font-body text-sm font-500 mt-0.5" [style.color]="exp.current ? '#FF8C5A' : '#00D4FF'">
                        {{ exp.company }}
                      </p>
                    </div>
                    <div class="text-right">
                      <span class="px-3 py-1 rounded-full text-xs font-body border"
                            [class]="exp.current
                              ? 'bg-brand/10 border-brand/30 text-brand'
                              : 'bg-white/5 border-white/10 text-white/50'">
                        {{ exp.current ? '🟢 Current' : exp.period }}
                      </span>
                      @if (exp.current) {
                        <p class="text-xs text-white/30 mt-1 font-body">{{ exp.period }}</p>
                      }
                    </div>
                  </div>

                  <div class="rounded-2xl p-5 border border-white/5"
                       style="background: linear-gradient(135deg, rgba(30,38,64,0.6) 0%, rgba(14,18,32,0.6) 100%)">
                    <ul class="space-y-2.5">
                      @for (point of exp.points; track point) {
                        <li class="flex gap-3 text-sm font-body text-white/60 leading-relaxed">
                          <span class="text-brand mt-0.5 flex-shrink-0">▪</span>
                          {{ point }}
                        </li>
                      }
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 mt-3">
                    @for (tag of exp.tags; track tag) {
                      <span class="px-2 py-0.5 rounded text-xs font-body border border-white/8"
                            style="background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.45)">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Frontend Engineer',
      company: '6 October Software Company · Egypt',
      period: '07/2025 – Present',
      current: true,
      icon: '💼',
      points: [
        'Led end-to-end development of 3+ ERP modules and educational platforms in Angular (v16+), encompassing reactive form architecture, dynamic data grids, and granular role-based access control.',
        'Produced pixel-precise, high-performance interfaces in close partnership with UI/UX designers and backend engineers, coordinating delivery via Azure DevOps.',
        'Established a shared component library adopted across 4+ internal projects, reducing code duplication by over 40%.',
      ],
      tags: ['Angular 16+', 'NgRx', 'RxJS', 'Azure DevOps', 'TypeScript', 'ERP'],
    },
    {
      role: 'Angular Frontend Developer',
      company: 'Verzisca · Saudi Arabia',
      period: '04/2025 – 07/2025',
      current: false,
      icon: '🌍',
      points: [
        'Took ownership of core ERP module development, establishing the routing structure, shared service layer, and RESTful API integration layer from first principles.',
        'Implemented centralised HTTP interceptors for JWT lifecycle management and unified error handling, guaranteeing secure API communication across all layers.',
      ],
      tags: ['Angular', 'RESTful APIs', 'JWT', 'HTTP Interceptors', 'ERP'],
    },
  ];
}
