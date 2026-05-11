import { Component, Input, Output, EventEmitter, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class]="scrolled() ? 'py-3 bg-dark-900/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6'">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <!-- Logo -->
        <a href="#hero" class="font-display font-800 text-xl tracking-tight">
          <span class="grad-text">Tawfik</span><span class="text-white/30">.</span>
        </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-8">
          @for (item of navItems; track item.label) {
            <li>
              <a [href]="item.href"
                 class="font-body text-sm font-medium transition-all duration-200 hover:text-brand relative group"
                 [class]="activeSection() === item.id ? 'text-brand' : 'text-white/60'">
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 h-px bg-brand transition-all duration-300"
                      [class]="activeSection() === item.id ? 'w-full' : 'w-0 group-hover:w-full'"></span>
              </a>
            </li>
          }
        </ul>

        <!-- Right actions -->
        <div class="flex items-center gap-3">
          <!-- Theme toggle -->
          <button (click)="themeToggle.emit()"
                  class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-brand/50 transition-all duration-200 text-sm">
            {{ isLight ? '🌙' : '☀️' }}
          </button>

          <!-- Download CV -->
          <a href="assets/Tawfik-Elgohare-CV.pdf" download
             class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-sm font-medium font-body
                    hover:bg-brand-lt transition-all duration-200 glow-brand">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download CV
          </a>

          <!-- Mobile menu -->
          <button class="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
                  (click)="mobileOpen.set(!mobileOpen())">
            <span class="w-5 h-px bg-white transition-all" [class]="mobileOpen() ? 'rotate-45 translate-y-1.5' : ''"></span>
            <span class="w-5 h-px bg-white transition-all" [class]="mobileOpen() ? 'opacity-0' : ''"></span>
            <span class="w-5 h-px bg-white transition-all" [class]="mobileOpen() ? '-rotate-45 -translate-y-1.5' : ''"></span>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      @if (mobileOpen()) {
        <div class="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          @for (item of navItems; track item.label) {
            <a [href]="item.href" (click)="mobileOpen.set(false)"
               class="block py-3 font-body text-sm text-white/70 hover:text-brand transition-colors border-b border-white/5 last:border-0">
              {{ item.label }}
            </a>
          }
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  @Input() isLight = false;
  @Output() themeToggle = new EventEmitter<void>();

  scrolled = signal(false);
  activeSection = signal('hero');
  mobileOpen = signal(false);

  navItems = [
    { label: 'About',      href: '#hero',       id: 'hero' },
    { label: 'Skills',     href: '#skills',     id: 'skills' },
    { label: 'Projects',   href: '#projects',   id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education',  href: '#education',  id: 'education' },
    { label: 'Contact',    href: '#contact',    id: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
    // active section detection
    const sections = this.navItems.map(i => i.id);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }
}
