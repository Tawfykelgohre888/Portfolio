import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, HeroComponent, SkillsComponent,
    ProjectsComponent, ExperienceComponent, EducationComponent, ContactComponent
  ],
  template: `
    <!-- Cursor blob -->
    <div class="cursor-blob" [style.left.px]="cursorX()" [style.top.px]="cursorY()"></div>

    <!-- Main wrapper -->
    <div class="noise min-h-screen" [class.light]="isLight()">
      <app-navbar (themeToggle)="toggleTheme()" [isLight]="isLight()" />

      <main>
        <app-hero />
        <app-skills />
        <app-projects />
        <app-experience />
        <app-education />
        <app-contact />
      </main>

      <!-- Footer -->
      <footer class="text-center py-8 text-sm opacity-40 font-body">
        <p>Crafted by Tawfik Abdelrahman Elgohare &mdash; {{ year }} &copy;</p>
      </footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  cursorX = signal(0);
  cursorY = signal(0);
  isLight = signal(false);
  year = new Date().getFullYear();

  ngOnInit() {
    // init reveal observer
    this.initReveal();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }

  toggleTheme() {
    this.isLight.update(v => !v);
    document.body.classList.toggle('light', this.isLight());
  }

  initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 300);
  }
}
