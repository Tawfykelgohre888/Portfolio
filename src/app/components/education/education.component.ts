import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-32 relative">
      <div class="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-8 pointer-events-none"
           style="background: radial-gradient(circle, #BCFF4F 0%, transparent 70%); filter: blur(80px)"></div>

      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="mb-16 reveal">
          <p class="section-label mb-3">My Background</p>
          <h2 class="font-display font-800 text-4xl md:text-5xl text-white">
            Education & <span class="grad-text-lime">Training</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">

          <!-- Education card -->
          <div class="reveal card-lift rounded-3xl p-8 border border-white/8"
               style="background: linear-gradient(135deg, rgba(30,38,64,0.9) 0%, rgba(14,18,32,0.9) 100%)">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                   style="background: rgba(188,255,79,0.15)">🎓</div>
              <div>
                <p class="section-label" style="color: #BCFF4F">Education</p>
              </div>
            </div>

            <h3 class="font-display font-700 text-xl text-white mt-4 mb-1">
              BSc. Management Information Systems
            </h3>
            <p class="font-body text-sm font-500 text-electric mb-1">Delta Academy, Mansoura</p>
            <p class="font-body text-xs text-white/40 mb-5">09/2019 – 05/2023</p>

            <div class="flex gap-4">
              <div class="flex-1 rounded-xl p-4 border border-white/5"
                   style="background: rgba(188,255,79,0.06)">
                <p class="font-display font-700 text-lime text-sm">Very Good</p>
                <p class="font-body text-xs text-white/40 mt-1">Cumulative Grade</p>
              </div>
              <div class="flex-1 rounded-xl p-4 border border-white/5"
                   style="background: rgba(0,212,255,0.06)">
                <p class="font-display font-700 text-electric text-sm">Excellent</p>
                <p class="font-body text-xs text-white/40 mt-1">Graduation Project</p>
              </div>
            </div>

            <div class="mt-4 p-4 rounded-xl border border-white/5" style="background: rgba(255,255,255,0.03)">
              <p class="font-body text-xs text-white/50 leading-relaxed">
                <span class="text-white/70 font-500">Graduation Project:</span> Job Recruitment Website — a full-stack platform
                matching candidates with employers, graded Excellent.
              </p>
            </div>
          </div>

          <!-- Courses -->
          <div class="space-y-5">
            @for (course of courses; track course.title; let i = $index) {
              <div class="reveal card-lift rounded-2xl p-6 border border-white/8"
                   [style.animation-delay]="i * 0.15 + 's'"
                   style="background: linear-gradient(135deg, rgba(30,38,64,0.8) 0%, rgba(14,18,32,0.8) 100%)">
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                       [style.background]="course.iconBg">
                    {{ course.icon }}
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-wrap items-center gap-2 mb-1">
                      <h4 class="font-display font-700 text-base text-white">{{ course.title }}</h4>
                      @if (course.inProgress) {
                        <span class="px-2 py-0.5 rounded-full text-xs bg-brand/15 border border-brand/30 text-brand font-body">In Progress</span>
                      }
                    </div>
                    <p class="font-body text-sm font-500 mb-1" [style.color]="course.color">{{ course.provider }}</p>
                    <p class="font-body text-xs text-white/40 mb-3">{{ course.period }}</p>
                    <div class="flex flex-wrap gap-1.5">
                      @for (tag of course.topics; track tag) {
                        <span class="px-2 py-0.5 rounded text-xs font-body border border-white/8"
                              style="background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.45)">
                          {{ tag }}
                        </span>
                      }
                    </div>
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
export class EducationComponent {
  courses = [
    {
      title: 'Advanced Angular Bootcamp',
      provider: 'Elevate Tech',
      period: '07/2025 – Present',
      inProgress: true,
      icon: '⚡',
      iconBg: 'rgba(255,107,53,0.15)',
      color: '#FF8C5A',
      topics: ['NgRx', 'Unit Testing', 'Clean Architecture', 'AI Integration', 'Real-World Projects'],
    },
    {
      title: 'Frontend Development Track',
      provider: 'Route Academy',
      period: '10/2024 – 02/2025',
      inProgress: false,
      icon: '🚀',
      iconBg: 'rgba(0,212,255,0.15)',
      color: '#00D4FF',
      topics: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'RxJS', 'RESTful APIs'],
    },
  ];
}
