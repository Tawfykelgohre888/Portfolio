import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-32 relative overflow-hidden">
      <!-- BG accent -->
      <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
           style="background: radial-gradient(circle, #00D4FF 0%, transparent 70%); filter: blur(60px)"></div>

      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="mb-16 reveal">
          <p class="section-label mb-3">What I work with</p>
          <h2 class="font-display font-800 text-4xl md:text-5xl text-white">
            Technical <span class="grad-text">Skills</span>
          </h2>
        </div>

        <!-- Category cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          @for (cat of categories; track cat.title; let i = $index) {
            <div class="reveal card-lift rounded-2xl p-6 border border-white/8"
                 [style.animation-delay]="i * 0.1 + 's'"
                 style="background: linear-gradient(135deg, rgba(30,38,64,0.8) 0%, rgba(14,18,32,0.8) 100%); backdrop-filter: blur(10px)">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                     [style.background]="cat.bg">
                  {{ cat.icon }}
                </div>
                <h3 class="font-display font-700 text-base text-white">{{ cat.title }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                @for (skill of cat.skills; track skill) {
                  <span class="px-2.5 py-1 rounded-lg text-xs font-body font-500 border"
                        [style.background]="cat.tagBg"
                        [style.border-color]="cat.tagBorder"
                        [style.color]="cat.tagColor">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

        <!-- Proficiency bars -->
        <div class="reveal grid md:grid-cols-2 gap-x-16 gap-y-6">
          @for (skill of proficiency; track skill.name) {
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-body text-sm font-500 text-white/70">{{ skill.name }}</span>
                <span class="font-display text-sm font-700 text-brand">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-1000 ease-out"
                     [style.width]="skill.level + '%'"
                     [style.background]="skill.color">
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  categories = [
    {
      title: 'Frontend Core', icon: '⚡', bg: 'rgba(255,107,53,0.15)',
      tagBg: 'rgba(255,107,53,0.08)', tagBorder: 'rgba(255,107,53,0.25)', tagColor: '#FF8C5A',
      skills: ['Angular (v14+)', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
    },
    {
      title: 'UI & Styling', icon: '🎨', bg: 'rgba(0,212,255,0.15)',
      tagBg: 'rgba(0,212,255,0.08)', tagBorder: 'rgba(0,212,255,0.25)', tagColor: '#00D4FF',
      skills: ['Tailwind CSS', 'Bootstrap', 'Angular Material', 'PrimeNG', 'Responsive Design'],
    },
    {
      title: 'Architecture', icon: '🏗️', bg: 'rgba(188,255,79,0.15)',
      tagBg: 'rgba(188,255,79,0.08)', tagBorder: 'rgba(188,255,79,0.25)', tagColor: '#BCFF4F',
      skills: ['Nx Monorepo', 'Module Federation', 'Lazy Loading', 'Component Architecture', 'Clean Code'],
    },
    {
      title: 'State & Async', icon: '🔄', bg: 'rgba(255,107,53,0.15)',
      tagBg: 'rgba(255,107,53,0.08)', tagBorder: 'rgba(255,107,53,0.25)', tagColor: '#FF8C5A',
      skills: ['NgRx', 'RxJS', 'Reactive Forms', 'HTTP Interceptors', 'Unit Testing'],
    },
    {
      title: 'API & Backend', icon: '🔌', bg: 'rgba(0,212,255,0.15)',
      tagBg: 'rgba(0,212,255,0.08)', tagBorder: 'rgba(0,212,255,0.25)', tagColor: '#00D4FF',
      skills: ['RESTful APIs', 'HttpClient', 'GraphQL', 'Error Handling', 'JWT / Auth'],
    },
    {
      title: 'Tools', icon: '🛠️', bg: 'rgba(188,255,79,0.15)',
      tagBg: 'rgba(188,255,79,0.08)', tagBorder: 'rgba(188,255,79,0.25)', tagColor: '#BCFF4F',
      skills: ['Git & GitHub', 'Azure DevOps', 'Azure Pipelines', 'Nx CLI', 'VS Code'],
    },
  ];

  proficiency = [
    { name: 'Angular',          level: 90, color: 'linear-gradient(90deg,#FF6B35,#FF8C5A)' },
    { name: 'TypeScript',       level: 88, color: 'linear-gradient(90deg,#00D4FF,#0099BB)' },
    { name: 'NgRx / RxJS',      level: 85, color: 'linear-gradient(90deg,#FF6B35,#FF8C5A)' },
    { name: 'Nx Monorepo',      level: 82, color: 'linear-gradient(90deg,#BCFF4F,#00D4FF)' },
    { name: 'Tailwind CSS',     level: 88, color: 'linear-gradient(90deg,#00D4FF,#BCFF4F)' },
    { name: 'Module Federation',level: 78, color: 'linear-gradient(90deg,#BCFF4F,#FF6B35)' },
  ];
}
