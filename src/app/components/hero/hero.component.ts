import { Component, OnInit, OnDestroy, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <!-- Animated background orbs -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 animate-float"
          style="background: radial-gradient(circle, #FF6B35 0%, transparent 70%)"
        ></div>
        <div
          class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 animate-float delay-300"
          style="background: radial-gradient(circle, #00D4FF 0%, transparent 70%); animation-delay: 3s"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style="background: radial-gradient(circle, #BCFF4F 0%, transparent 70%)"
        ></div>
        <!-- Grid pattern -->
        <div
          class="absolute inset-0 opacity-5"
          style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;"
        ></div>
      </div>

      <div
        class="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center"
      >
        <!-- Left: text -->
        <div>
          <div class="section-label mb-6 animate-slide-left">👋 Hello, I'm</div>

          <h1
            class="font-display font-800 text-5xl md:text-7xl leading-none mb-4 animate-slide-left delay-100"
          >
            <span class="block text-white">Tawfik</span>
            <span class="block grad-text text-glow">Elgohare</span>
          </h1>

          <!-- Typing animation -->
          <div class="h-10 mb-6 animate-slide-left delay-200">
            <p class="font-display text-xl md:text-2xl font-600 text-white/70">
              {{ displayText() }}<span class="text-brand animate-pulse">|</span>
            </p>
          </div>

          <p
            class="font-body text-base text-white/50 leading-relaxed max-w-md mb-10 animate-slide-left delay-300"
          >
            Angular Front-End Developer specialising in scalable Nx Monorepo
            architectures, Module Federation, NgRx state management, and
            delivering pixel-perfect, high-performance UIs.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-4 animate-slide-left delay-400">
            <a
              href="#projects"
              class="px-7 py-3.5 rounded-full bg-brand text-white font-body font-medium text-sm
                      hover:bg-brand-lt transition-all duration-200 glow-brand flex items-center gap-2"
            >
              View Projects
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              class="px-7 py-3.5 rounded-full border border-white/15 text-white/70 font-body font-medium text-sm
                      hover:border-brand/50 hover:text-white transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          <!-- Stats row -->
          <div class="flex gap-10 mt-14 animate-slide-left delay-500">
            @for (stat of stats; track stat.label) {
              <div>
                <p class="font-display font-800 text-3xl grad-text">
                  {{ stat.value }}
                </p>
                <p class="font-body text-xs text-white/40 mt-1">
                  {{ stat.label }}
                </p>
              </div>
            }
          </div>
        </div>

        <!-- Right: avatar card -->
        <div
          class="hidden lg:flex justify-center items-center relative animate-slide-right delay-200"
        >
          <!-- Spinning ring -->
          <div
            class="absolute w-80 h-80 rounded-full border border-dashed border-brand/20 animate-spin-slow"
          ></div>
          <div
            class="absolute w-96 h-96 rounded-full border border-dashed border-electric/10 animate-spin-slow"
            style="animation-direction: reverse; animation-duration: 30s;"
          ></div>

          <!-- Avatar card -->
          <div
            class="relative w-72 h-72 rounded-3xl overflow-hidden border-2 border-white/10 glow-brand animate-float"
            style="background: linear-gradient(135deg, #1E2640 0%, #0E1220 100%);"
          >
            <!-- Placeholder avatar -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div
                class="w-32 h-32  rounded-full mb-4 flex items-center justify-center text-7xl font-display font-800 grad-text"
                style="background: rgba(255,107,53,0.1); border: 2px solid rgba(255,107,53,0.2)  "
              >
                <img
                  class="w-[100%] h-[100%] rounded-full "
                  src="/imageTawfik.jfif"
                  alt="imageTawfik"
                />
              </div>
              <p class="font-display font-700 text-white text-lg">
                Tawfik Elgohare
              </p>
              <p class="font-body text-sm text-white/40 mt-1">
                Angular Developer
              </p>

              <!-- Tech badges -->
              <div class="flex gap-2 mt-4">
                @for (badge of badges; track badge) {
                  <span
                    class="px-2.5 py-1 rounded-full text-xs font-body font-500 border border-white/10"
                    style="background: rgba(255,255,255,0.05)"
                  >
                    {{ badge }}
                  </span>
                }
              </div>
            </div>
          </div>

          <!-- Floating chips -->
          <div
            class="absolute top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-body font-600 bg-lime/10 border border-lime/30 text-lime animate-float"
            style="animation-delay:1s"
          >
            Angular 16+
          </div>
          <div
            class="absolute bottom-8 -left-6 px-3 py-1.5 rounded-full text-xs font-body font-600 bg-electric/10 border border-electric/30 text-electric animate-float"
            style="animation-delay:2s"
          >
            NgRx Expert
          </div>
          <div
            class="absolute top-1/2 -right-8 px-3 py-1.5 rounded-full text-xs font-body font-600 bg-brand/10 border border-brand/30 text-brand animate-float"
            style="animation-delay:0.5s"
          >
            Nx Monorepo
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-600"
      >
        <span class="font-body text-xs text-white/30 tracking-widest uppercase"
          >Scroll</span
        >
        <div class="w-px h-12 bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </section>

    <!-- Ticker / marquee -->
    <div
      class="py-4 border-y border-white/5 overflow-hidden"
      style="background: rgba(255,107,53,0.04)"
    >
      <div
        class="flex gap-12 animate-ticker whitespace-nowrap"
        style="width: max-content"
      >
        @for (item of ticker; track $index) {
          <span
            class="font-display font-700 text-sm text-white/20 uppercase tracking-widest"
            >{{ item }}</span
          >
          <span class="text-brand">✦</span>
        }
        @for (item of ticker; track $index) {
          <span
            class="font-display font-700 text-sm text-white/20 uppercase tracking-widest"
            >{{ item }}</span
          >
          <span class="text-brand">✦</span>
        }
      </div>
    </div>
  `,
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal("");

  roles = [
    "Angular Developer",
    "NgRx Specialist",
    "Nx Monorepo Architect",
    "Module Federation Expert",
    "UI/UX Engineer",
  ];

  stats = [
    { value: "2+", label: "Years Experience" },
    { value: "6+", label: "Projects Built" },
    { value: "10+", label: "NgRx State Slices" },
  ];

  badges = ["RxJS", "NgRx", "Nx"];

  ticker = [
    "Angular",
    "TypeScript",
    "NgRx",
    "RxJS",
    "Nx Monorepo",
    "Module Federation",
    "Tailwind CSS",
    "Azure DevOps",
    "GraphQL",
    "Reactive Forms",
    "Unit Testing",
    "Clean Code",
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }
  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  type() {
    const current = this.roles[this.roleIndex];
    if (!this.deleting) {
      this.displayText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 60 : 100);
  }
}
