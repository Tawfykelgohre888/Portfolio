import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-32 relative">
      <!-- BG -->
      <div
        class="absolute inset-0 pointer-events-none opacity-30"
        style="background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,107,53,0.08), transparent)"
      ></div>

      <div class="max-w-7xl mx-auto px-6">
        <!-- Header -->
        <div
          class="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal"
        >
          <div>
            <p class="section-label mb-3">What I've built</p>
            <h2 class="font-display font-800 text-4xl md:text-5xl text-white">
              Featured <span class="grad-text-lime">Projects</span>
            </h2>
          </div>
          <div class="flex gap-2 mt-6 md:mt-0">
            @for (filter of filters; track filter) {
              <button
                (click)="activeFilter.set(filter)"
                class="px-4 py-1.5 rounded-full text-xs font-body font-600 transition-all duration-200"
                [class]="
                  activeFilter() === filter
                    ? 'bg-brand text-white'
                    : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                "
              >
                {{ filter }}
              </button>
            }
          </div>
        </div>

        <!-- Featured project (large) -->
        <div class="reveal mb-8">
          <div
            class="rounded-3xl overflow-hidden border border-white/8 card-lift"
            style="background: linear-gradient(135deg, #1E2640 0%, #0E1220 100%)"
          >
            <div class="grid lg:grid-cols-2">
              <!-- Visual side -->
              <div
                class="relative h-64 lg:h-auto min-h-72 overflow-hidden"
                style="background: linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(0,212,255,0.1) 100%)"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div
                      class="text-8xl font-display font-800 grad-text opacity-20"
                    >
                      Rosr
                    </div>
                    <div class="flex gap-3 mt-4 justify-center">
                      <span
                        class="px-3 py-1 rounded-full text-xs bg-brand/20 border border-brand/30 text-brand font-body"
                        >E-Commerce</span
                      >
                      <span
                        class="px-3 py-1 rounded-full text-xs bg-electric/20 border border-electric/30 text-electric font-body"
                        >Admin</span
                      >
                    </div>
                  </div>
                </div>
                <!-- Geometric decoration -->
                <div
                  class="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-brand/20 animate-spin-slow"
                ></div>
                <div
                  class="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-electric/20 animate-spin-slow"
                  style="animation-direction:reverse"
                ></div>
                <span
                  class="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs bg-lime/15 border border-lime/30 text-lime font-body font-600"
                  >⭐ Featured</span
                >
              </div>

              <!-- Content side -->
              <div class="p-8 lg:p-10">
                <h3 class="font-display font-800 text-2xl text-white mb-3">
                  Rosr — E-Commerce & Admin Dashboard
                </h3>
                <p class="font-body text-sm text-white/50 mb-6 leading-relaxed">
                  Conceived and implemented a scalable Nx Monorepo architecture
                  with Module Federation, partitioning the Storefront and Admin
                  Dashboard into independently deployable applications with
                  clearly defined boundaries. Orchestrated complex state across
                  10+ NgRx slices.
                </p>

                <div class="flex flex-wrap gap-2 mb-8">
                  @for (tag of rosr.tags; track tag) {
                    <span
                      class="px-2.5 py-1 rounded-lg text-xs font-body border border-white/10"
                      style="background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.6)"
                    >
                      {{ tag }}
                    </span>
                  }
                </div>

                <div class="flex gap-3">
                  <a
                    href="https://github.com/Rana-hanii/RoseECommerceWorkspace.git"
                    target="_blank"
                    class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white text-sm font-body font-500 hover:bg-brand-lt transition-all"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    GitHub
                  </a>
                  <div
                    class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 text-sm font-body"
                  >
                    <span>11/2024 – 04/2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other projects grid -->
        <div class="grid md:grid-cols-2 gap-6">
          @for (proj of otherProjects; track proj.title; let i = $index) {
            <div
              class="reveal card-lift rounded-2xl p-7 border border-white/8"
              [style.animation-delay]="i * 0.15 + 's'"
              style="background: linear-gradient(135deg, rgba(30,38,64,0.8) 0%, rgba(14,18,32,0.8) 100%)"
            >
              <div class="flex items-start justify-between mb-4">
                <div
                  class="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  [style.background]="proj.iconBg"
                >
                  {{ proj.icon }}
                </div>
                <span class="font-body text-xs text-white/30">{{
                  proj.period
                }}</span>
              </div>
              <h3 class="font-display font-700 text-lg text-white mb-2">
                {{ proj.title }}
              </h3>
              <p class="font-body text-sm text-white/50 leading-relaxed mb-5">
                {{ proj.desc }}
              </p>
              <div class="flex flex-wrap gap-2 mb-5">
                @for (tag of proj.tags; track tag) {
                  <span
                    class="px-2 py-0.5 rounded text-xs font-body border border-white/8"
                    style="background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.5)"
                  >
                    {{ tag }}
                  </span>
                }
              </div>
              <a
                [href]="proj.github"
                target="_blank"
                class="inline-flex items-center gap-1.5 text-xs font-body text-brand hover:text-brand-lt transition-colors"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                View on GitHub →
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  activeFilter = signal("All");
  filters = ["All", "Angular", "NgRx", "Nx"];

  rosr = {
    tags: [
      "Angular",
      "NgRx",
      "RxJS",
      "Nx Monorepo",
      "Module Federation",
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  otherProjects = [
    {
      title: "Online Exam System",
      desc: "Timer-driven examination platform with real-time countdown, concurrent multi-user sessions, and instant result calculation using RxJS observables and Reactive Forms.",
      period: "07/2024 – 08/2024",
      icon: "📝",
      iconBg: "rgba(0,212,255,0.15)",
      tags: ["Angular 16", "RxJS", "Tailwind CSS", "Reactive Forms"],
      github: "https://github.com/Tawfykelgohre888/OnlineExam.git",
    },
    {
      title: "Charity Management Website",
      desc: "Fully responsive charitable organisation platform with donation processing, volunteer registration, campaign lifecycle management, and RESTful API integration.",
      period: "05/2024 – 06/2024",
      icon: "❤️",
      iconBg: "rgba(188,255,79,0.15)",
      tags: ["Angular", "RESTful APIs", "Reactive Forms", "Bootstrap"],
      github: "https://github.com/Tawfykelgohre888/charity.git",
    },
  ];
}
