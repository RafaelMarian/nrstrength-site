// src/content.js - VERSIUNEA FINALĂ CU NUTRIȚIE ȘI LEGAL

export const content = {
  en: {
    nav: {
      features: "Features",
      roadmap: "Roadmap",
      download: "Download App"
    },
    hero: {
      title: "Level Up Your Life.",
      subtitle: "Fitness is hard. We make it an RPG. Grind your stats, earn loot, and get strong.",
      cta: "Start Your Quest"
    },
    features: {
      title: "Game Features",
      rpg_title: "The RPG Economy",
      rpg_desc: "Loot drops, inventory systems, and gold. Earn 'Gym Socks' or 'Golden Dumbbells' just by working out.",
      ai_title: "Super Smart Coach AI",
      ai_desc: "An algorithm that knows you. Generates custom 12-week programs and filters exercises based on your injuries.",
      analytics_title: "Pro Analytics",
      analytics_desc: "3D Barbell visualization, Muscle Balance Radar, and Readiness Score for data nerds.",
      privacy_title: "Offline & Private",
      privacy_desc: "Your Data, Your Gains. Works offline, stores data locally. We don't sell your history."
    },
    roadmap: {
      title: "The Roadmap",
      subtitle: "From notebook to App Store",
      items: [
        { title: "Phase 1: Idea", desc: "I was at the gym and I had to note all workouts on a notebook. Then I had to make a working plan, so why don't I build an app for this?" },
        { title: "Phase 2: Implementation", desc: "Starting to implement in Dart, learning, improving." },
        { title: "Phase 3: First Prototype", desc: "First prototype was made, it was tested and the feedback was mixed so I had to improve." },
        { title: "Phase 4: MVP", desc: "MVP is ready for testing and feedback." }
      ]
    },
    testimonials: {
      title: "What Athletes Say",
      list: [
        { name: "Alex D.", role: "Powerlifter", text: "Finally an app that understands block periodization. My deadlift went up 20kg in 3 months.", stars: 5 },
        { name: "Sarah J.", role: "Crossfit", text: "The injury guardian saved my shoulder. It automatically swapped exercises when I felt pain.", stars: 5 },
        { name: "Mike T.", role: "Beginner", text: "I love the RPG elements. Earning XP makes me want to go to the gym even on rainy days.", stars: 5 }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      list: [
        { q: "Is the app free?", a: "We offer a generous Free Tier. The AI Coach requires a premium subscription (price of a coffee/month)." },
        { q: "Does it work offline?", a: "Yes! All data is stored locally on your device. You only need internet for backups." },
        { q: "Can I log my own workouts?", a: "Absolutely. You can use the AI recommendations or build your own routine from scratch." }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      slogan: "Built for Gamers who Lift."
    },
    coach: {
      title: "Super Smart Coach",
      subtitle: "The Brain Behind The Muscle",
      intro: "More than just a tracker. A living, thinking intelligence that acts as your Strategist, Guardian, and Spotter.",
      strategist: {
        title: "The Strategist",
        role: "Long-Term Planning",
        desc: "Treats your training like an athlete's career using Block Periodization.",
        phases: ["Phase 1: Hypertrophy", "Phase 2: Strength", "Phase 3: Peaking"]
      },
      architect: {
        title: "The Architect",
        role: "Surgical Precision",
        desc: "Builds workouts based on your weak points and corrects posture imbalances automatically."
      },
      guardian: {
        title: "The Guardian",
        role: "Safety & Health",
        desc: "Protects your joints. Swaps exercises instantly if you're injured and manages fatigue with auto-deloads."
      },
      spotter: {
        title: "The Spotter",
        role: "Real-Time AI",
        desc: "Adjusts the plan while you workout. Changes intensity based on how you feel right now."
      },
      gamification: {
        title: "Gamification",
        role: "The Addiction",
        desc: "Tracks NEAT (steps) and unlocks legendary rewards to keep your dopamine flowing."
      }
    },
    pages: {
      training: "Training",
      nutrition: "Nutrition",
      profile: "Profile",
      coach_btn: "Meet the Coach AI",
      future: "Dev Log"
    },
    futurePage: {
      title: "Future Development",
      subtitle: "Vote on what we build next.",
      categories: {
        planned: "Planned 💡",
        in_progress: "In Progress 🚧",
        done: "Completed ✅"
      },
      items: [
        { id: 1, title: "Smart Coach Upgrade", category: "planned", votes: 0, desc: "New features and system improvements." },
        { id: 2, title: "Card Battle System", category: "planned", votes: 0, desc: "Challenge a friend to a lifting duel using cards." },
        { id: 3, title: "Nutrition Revamp", category: "in_progress", votes: 0, desc: "Scan barcodes to track macros instantly." },
        { id: 4, title: "GPS Route Tracking", category: "in_progress", votes: 0, desc: "View your running routes directly on the map." },
        { id: 5, title: "Cloud Save System", category: "done", votes: 0, desc: "Login interface & Firebase Gold sync." }
      ]
    },
    trainingPage: {
      title: "The Active Interface",
      subtitle: "A living blueprint that adapts in real-time.",
      zones: [
        {
          id: 1,
          name: "Zone 1: Command Center",
          icon: "🎛️",
          desc: "Strategic overview & Panic Buttons.",
          details: [
            "Dynamic Metadata: Recalculates duration instantly.",
            "Time Saver Protocol: AI strips 'Fluff', locks Compounds, reduces rest to 45s. Saves 60 mins.",
            "Plate Calculator: Visualizes exact loading (e.g. 2x20kg) to reduce math fatigue."
          ]
        },
        {
          id: 2,
          name: "Zone 2: Coach's Voice",
          icon: "🗣️",
          desc: "Real-time AI feedback loop.",
          details: [
            "RPE Analysis: Detects Sandbagging (RPE 5) vs Grinding (RPE 10).",
            "Injury Guardian: Blocks unsafe moves (e.g. Behind Neck Press) if shoulder pain is flagged."
          ]
        },
        {
          id: 3,
          name: "Zone 3: Work Floor",
          icon: "🏋️",
          desc: "Tiered execution logic.",
          details: [
            "Smart Sorting: Tier 1 Compounds pinned at top.",
            "History Ghost: Sees previous session stats as faint targets.",
            "Intelligent Substitution: Swaps exercises based on biomechanics (Barbell -> Dumbbell)."
          ]
        },
        {
          id: 4,
          name: "Zone 4: Recovery Engine",
          icon: "⏱️",
          desc: "Managing the space between sets.",
          details: [
            "Auto-Rest: Starts automatically on set completion.",
            "Smart Duration: 3min for Compounds, 1:30 for ISOs.",
            "Media Control: Lowers music volume during rest."
          ]
        },
        {
          id: 5,
          name: "Zone 5: Victory Lap",
          icon: "🏆",
          desc: "Closing the session & Macro-update.",
          details: [
            "Session Rating: Pain > 5 triggers Injury Protocol next session.",
            "Gamification: Haptics & Confetti on PRs.",
            "Data Write: Updates Imbalance Tracker immediately."
          ]
        }
      ],
      tech_title: "Under The Hood",
      tech_subtitle: "System Architecture Deep Dive",
      tech_stack: [
        { title: "The Time Engine", desc: "Reverse-Engineers from Goal Date. Allocates phases (Hypertrophy -> Strength -> Peaking) backwards." },
        { title: "Tiered Logic", desc: "Tier 1 (Anchors) never rotate. Tier 2 (Accessories) rotate monthly to prevent boredom." },
        { title: "Imbalance Analyst", desc: "If Push > Pull + 4 sets, injects Face Pulls into Leg Day automatically." },
        { title: "Safety State", desc: "Tag-based exclusion. 'Shoulder Injury' blocks all IDs with tag 'overhead'." }
      ]
    },
    profilePage: {
      title: "The Me Hub",
      subtitle: "Your Trophy Room and Control Panel.",
      zones: [
        {
          id: 1,
          name: "Zone 1: Identity & Status",
          icon: "🔥",
          desc: "Player Card, XP Level & Streak.",
          details: [
            "Level Ring: Circular progress bar. XP Sources: Workouts (+100), Steps (+50).",
            "Gamification: Tap level to reveal 'Next Reward' (e.g. Gold Theme).",
            "Streak Flame: Tracks consistency. Miss a day? It resets to 0. The ultimate retention hook."
          ]
        },
        {
          id: 2,
          name: "Zone 2: The Trophy Room",
          icon: "🏆",
          desc: "Gamification Shop & Collection.",
          details: [
            "Currency Wallet: Counts 'Gold Coins' earned from sweat.",
            "Collection Grid: Unlocked Cards (Themes, Blueprints) with Rarity glows (Common vs Legendary).",
            "Item Shop: Spend gold to equip new app skins."
          ]
        },
        {
          id: 3,
          name: "Zone 3: The Lab",
          icon: "🧪",
          desc: "Analytics & Biometrics Proof.",
          details: [
            "Strength Chart: Auto-plots Estimated 1RM trends for Squat, Bench, Deadlift.",
            "Body Cards: 2x2 Grid for Weight, BMI, TDEE, Body Fat %.",
            "Data Source: Scans Hive history to extract max efforts."
          ]
        },
        {
          id: 4,
          name: "Zone 4: The Mirror",
          icon: "🪞",
          desc: "Visual Transformation Gallery.",
          details: [
            "Timeline View: Horizontal list of physique photos stored locally.",
            "Compare Tool: Side-by-side view (First Photo vs Latest Photo) to visualize gains."
          ]
        },
        {
          id: 5,
          name: "Zone 5: Control Panel",
          icon: "🎚️",
          desc: "Coach Configuration & Inputs.",
          details: [
            "Injury Protocol: Select 'Right Shoulder' -> AI hot-swaps Overhead Press for Lateral Raises instantly.",
            "Equipment Profile: Toggle Gym/Home. Triggers Plan Regeneration.",
            "Peaking Engine: Set 'Wedding Date' -> AI calculates the Macrocycle backwards to peak then."
          ]
        }
      ],
      tech_title: "System Architecture",
      tech_subtitle: "How the Profile Logic Works",
      tech_stack: [
        { title: "Leveling Algorithm", desc: "Formula: Total XP / 1000. Gamification triggers haptic feedback on level up." },
        { title: "The Guardian Logic", desc: "Injury Toggle acts as a Global Filter. It scans the active JSON plan and removes banned IDs." },
        { title: "Local Storage", desc: "Photos for 'The Mirror' are stored in the device's secure sandbox, never uploaded." },
        { title: "Dynamic Rarity", desc: "Item borders render via CSS gradients based on metadata: 'legendary' | 'common'." }
      ]
    },
    nutritionPage: {
      title: "The Fuel Station",
      subtitle: "Dynamic Nutrition synced with your Training Phase.",
      zones: [
        {
          id: 1,
          name: "Zone 1: The Dashboard",
          icon: "🔋",
          desc: "Calorie Ring & Macro Split.",
          details: [
            "Calorie Ring: Visual gauge. Green = On Track, Red = Surplus, Orange = Undereating.",
            "Smart Target: TDEE + Phase Modifier. Growth Phase adds +250kcal. Peaking Phase cuts to maintenance.",
            "Macro Split: Protein (Priority), Carbs (Performance), Fats (Health)."
          ]
        },
        {
          id: 2,
          name: "Zone 2: Supply Chain",
          icon: "🛒",
          desc: "Food Database & Custom Creation.",
          details: [
            "Search: Queries standard DB + 'My Foods' custom DB.",
            "Creation Station: Add custom foods (Name, Macros) to local Hive storage.",
            "Filters: Prioritizes items you log frequently."
          ]
        },
        {
          id: 3,
          name: "Zone 3: Daily Log",
          icon: "📝",
          desc: "Consumption History & Meal Grouping.",
          details: [
            "Meal Groups: Collapsible Breakfast, Lunch, Dinner lists.",
            "Interaction: Swipe left to delete items. Sticky 'Totals Row' at the bottom.",
            "Add Logic: '+' button injects food into specific meal slot."
          ]
        },
        {
          id: 4,
          name: "Zone 4: Hydration & Extras",
          icon: "💧",
          desc: "Water Tracker & Supplements.",
          details: [
            "Water Tracker: Tap glass icon to add 250ml. Long press to reset.",
            "Supplement Checklist: Daily toggles for Creatine and Whey. Resets at midnight."
          ]
        },
        {
          id: 5,
          name: "Zone 5: The Strategist",
          icon: "🧠",
          desc: "Diet Settings aligned with Training.",
          details: [
            "Diet Preference: Toggle Low Carb / Balanced. AI recalculates macro ratios instantly.",
            "Auto-Sync: If ON, Coach overrides TDEE based on current Mesocycle (e.g. cuts calories on Deload week)."
          ]
        }
      ],
      tech_title: "Under The Hood",
      tech_subtitle: "Nutrition Logic Architecture",
      tech_stack: [
        { title: "TDEE Algorithm", desc: "Mifflin-St Jeor Formula tailored by activity level modifier." },
        { title: "Phase Sync", desc: "Observer Pattern. Nutrition Service listens to Training Service state changes." },
        { title: "Local DB", desc: "Custom foods stored in Hive box 'user_foods' for offline access." },
        { title: "State Management", desc: "Reactive Provider updates 'Calories Remaining' instantly across the UI." }
      ]
    },
    legal: {
      privacy_title: "Privacy Policy",
      terms_title: "Terms & Medical Disclaimer",
      updated: "Last updated: December 2024",
      privacy_content: [
        { h: "1. Data Collection", p: "We collect your email address purely for the waiting list. We do not sell your data to third parties." },
        { h: "2. Health Data", p: "In the future app, all health data (weight, photos) will be stored locally on your device or securely encrypted in the cloud." },
        { h: "3. Your Rights", p: "You can request the deletion of your data at any time by contacting support@nrstrength.com." }
      ],
      terms_content: [
        { h: "1. Medical Disclaimer (CRITICAL)", p: "NRStrength is not a medical app. The exercises and AI suggestions are for informational purposes only. Consult a physician before starting any workout program. By using this app, you agree that you exercise at your own risk." },
        { h: "2. Intellectual Property", p: "The code, design, and 'Super Smart Coach' logic are owned by NRStrength." },
        { h: "3. User Conduct", p: "We reserve the right to ban users who attempt to hack, scrape, or abuse the platform." }
      ]
    }
  },

  ro: {
    nav: {
      features: "Funcționalități",
      roadmap: "Roadmap",
      download: "Descarcă Aplicația"
    },
    hero: {
      title: "Crește-ți Nivelul.",
      subtitle: "Fitness-ul e greu. Noi îl transformăm într-un RPG. Crește-ți stats-urile, câștigă loot și devino puternic.",
      cta: "Începe Misiunea"
    },
    features: {
      title: "Funcționalități",
      rpg_title: "Economie RPG",
      rpg_desc: "Loot drops, inventar și aur. Câștigă 'Șosete de Sală' sau 'Ganterele de Aur' doar antrenându-te.",
      ai_title: "Antrenor AI Inteligent",
      ai_desc: "Un algoritm care te cunoaște. Generează programe de 12 săptămâni și filtrează exercițiile dacă ai accidentări.",
      analytics_title: "Analize Pro",
      analytics_desc: "Vizualizare 3D a barei, Radar de Balans Muscular și Scored de Pregătire pentru pasionații de date.",
      privacy_title: "Offline & Privat",
      privacy_desc: "Datele tale, Mușchii tăi. Funcționează fără net, stocare locală. Nu îți vindem istoricul."
    },
    roadmap: {
      title: "Evoluția Proiectului",
      subtitle: "De la caiet la App Store",
      items: [
        { title: "Faza 1: Ideea", desc: "Eram la sală și trebuia să-mi notez toate antrenamentele într-un caiet. Apoi a trebuit să fac un plan de antrenament, așa că mi-am zis: de ce să nu construiesc o aplicație pentru asta?" },
        { title: "Faza 2: Implementarea", desc: "Am început implementarea în Dart, învățând și îmbunătățind constant procesul." },
        { title: "Faza 3: Primul Prototip", desc: "Primul prototip a fost realizat și testat. Feedback-ul a fost mixt, așa că a trebuit să aduc îmbunătățiri." },
        { title: "Faza 4: MVP", desc: "MVP-ul este gata pentru testare și feedback din partea utilizatorilor." }
      ]
    },
    testimonials: {
      title: "Ce Spun Atleții",
      list: [
        { name: "Alex D.", role: "Powerlifter", text: "În sfârșit o aplicație care înțelege periodizarea. Îndreptările mele au crescut cu 20kg în 3 luni.", stars: 5 },
        { name: "Sarah J.", role: "Crossfit", text: "Gardianul de accidentări mi-a salvat umărul. A schimbat automat exercițiile când am simțit durere.", stars: 5 },
        { name: "Mike T.", role: "Începător", text: "Ador elementele RPG. Faptul că primesc XP mă motivează să merg la sală și când plouă.", stars: 5 }
      ]
    },
    faq: {
      title: "Întrebări Frecvente",
      list: [
        { q: "Este aplicația gratuită?", a: "Oferim o versiune gratuită generoasă. Antrenorul AI necesită abonament (prețul unei cafele/lună)." },
        { q: "Funcționează offline?", a: "Da! Toate datele sunt stocate local pe telefon. Ai nevoie de net doar pentru backup." },
        { q: "Pot să-mi fac propriul antrenament?", a: "Absolut. Poți folosi recomandările AI sau să-ți construiești rutina de la zero." }
      ]
    },
    footer: {
      rights: "Toate drepturile rezervate.",
      slogan: "Construit pentru Gamerii care Trag de Fiare."
    },
    coach: {
      title: "Antrenor Super Inteligent",
      subtitle: "Creierul din spatele Mușchilor",
      intro: "Mai mult decât un tracker. O inteligență vie care acționează ca Strateg, Gardian și Spotter.",
      strategist: {
        title: "Strategul",
        role: "Planificare pe Termen Lung",
        desc: "Îți tratează antrenamentul ca pe cariera unui atlet, folosind Periodizarea în Blocuri.",
        phases: ["Faza 1: Hipertrofie", "Faza 2: Forță", "Faza 3: Vârf de Formă"]
      },
      architect: {
        title: "Arhitectul",
        role: "Precizie Chirurgicală",
        desc: "Construiește antrenamente bazate pe punctele slabe și corectează automat dezechilibrele posturale."
      },
      guardian: {
        title: "Gardianul",
        role: "Siguranță & Sănătate",
        desc: "Îți protejează articulațiile. Schimbă exercițiile instant dacă ești accidentat și gestionează oboseala."
      },
      spotter: {
        title: "Spotter-ul",
        role: "AI în Timp Real",
        desc: "Ajustează planul în timp ce te antrenezi. Schimbă intensitatea în funcție de cum te simți acum."
      },
      gamification: {
        title: "Gamification",
        role: "Adicția Bună",
        desc: "Urmărește NEAT (pașii) și deblochează recompense legendare pentru a menține dopamina."
      }
    },
    pages: {
      training: "Antrenament",
      nutrition: "Nutriție",
      profile: "Profil",
      coach_btn: "Cunoaște Antrenorul AI",
      future: "Urmatorele developari"
    },
    futurePage: {
      title: "Dezvoltare Viitoare",
      subtitle: "Votează ce construim mai departe.",
      categories: {
        planned: "Planificat 💡",
        in_progress: "În Lucru 🚧",
        done: "Finalizat ✅"
      },
      items: [
        { id: 1, title: "Adaptare Smart Coach", category: "planned", votes: 0, desc: "Noi functii si modificari." },
        { id: 2, title: "Joc de carti", category: "planned", votes: 0, desc: "Provoacă un prieten la un duel de ridicări." },
        { id: 3, title: "Modificare pagina de nutritie", category: "in_progress", votes: 0, desc: "Scanează coduri de bare pentru calorii." },
        { id: 4, title: "Map", category: "in_progress", votes: 0, desc: "Poti sa vezi ruta ta pe mapa." },
        { id: 5, title: "Testare", category: "done", votes: 0, desc: "Testare" }
      ]
    },
    trainingPage: {
      title: "Interfața Activă",
      subtitle: "Un plan viu care se adaptează în timp real.",
      zones: [
        {
          id: 1,
          name: "Zona 1: Centrul de Comandă",
          icon: "🎛️",
          desc: "Privire de ansamblu & Butoane de Panică.",
          details: [
            "Metadate Dinamice: Recalculează durata instant.",
            "Protocol Economisire Timp: AI șterge 'umplutura', blochează exercițiile compuse, reduce pauza la 45s.",
            "Calculator Discuri: Vizualizează încărcarea exactă (ex. 2x20kg)."
          ]
        },
        {
          id: 2,
          name: "Zona 2: Vocea Antrenorului",
          icon: "🗣️",
          desc: "Feedback AI în timp real.",
          details: [
            "Analiză RPE: Detectează Lenevirea (RPE 5) vs Efort Maxim (RPE 10).",
            "Gardian Accidentări: Blochează mișcări nesigure dacă ai dureri."
          ]
        },
        {
          id: 3,
          name: "Zona 3: Podeaua de Lucru",
          icon: "🏋️",
          desc: "Logica de execuție etajată.",
          details: [
            "Sortare Inteligentă: Tier 1 (Compuse) fixate sus.",
            "Fantoma Istoric: Vezi cifrele sesiunii trecute ca țintă.",
            "Substituție Inteligentă: Schimbă exerciții biomecanic echivalente."
          ]
        },
        {
          id: 4,
          name: "Zona 4: Motorul de Recuperare",
          icon: "⏱️",
          desc: "Gestionarea pauzelor.",
          details: [
            "Auto-Rest: Pornește automat la final de set.",
            "Durată Smart: 3min pentru Compuse, 1:30 pentru Izolare.",
            "Control Media: Scade volumul muzicii în pauză."
          ]
        },
        {
          id: 5,
          name: "Zona 5: Turul de Onoare",
          icon: "🏆",
          desc: "Finalizare & Actualizare Macro.",
          details: [
            "Rating Sesiune: Durerea > 5 declanșează Protocolul de Accidentare.",
            "Gamification: Haptic & Confetti la recorduri.",
            "Scriere Date: Actualizează Trackerul de Dezechilibru imediat."
          ]
        }
      ],
      tech_title: "Sub Capotă",
      tech_subtitle: "Analiză Arhitectură Sistem",
      tech_stack: [
        { title: "Motorul de Timp", desc: "Inginerie Inversă de la Data Țintă. Alocă fazele (Hipertrofie -> Forță) înapoi." },
        { title: "Logica Etajată", desc: "Tier 1 (Ancore) nu se rotesc. Tier 2 (Accesorii) se rotesc lunar." },
        { title: "Analist Dezechilibru", desc: "Dacă Împins > Tras + 4 seturi, injectează Face Pulls în ziua de picioare." },
        { title: "Stare Siguranță", desc: "Excludere pe bază de tag-uri. 'Accidentare Umăr' blochează tot ce are tag 'overhead'." }
      ]
    },
    profilePage: {
      title: "Hub-ul Meu",
      subtitle: "Sala ta de Trofee și Panoul de Control.",
      zones: [
        {
          id: 1,
          name: "Zona 1: Identitate & Status",
          icon: "🔥",
          desc: "Card Jucător, Nivel XP & Serie.",
          details: [
            "Inel Nivel: Bară circulară. Surse XP: Antrenamente (+100), Pași (+50).",
            "Gamification: Apasă pe nivel pentru a vedea 'Următoarea Recompensă'.",
            "Focul Seriei (Streak): Urmărește consistența. Ai sărit o zi? Se resetează la 0."
          ]
        },
        {
          id: 2,
          name: "Zona 2: Sala Trofeelor",
          icon: "🏆",
          desc: "Magazin & Colecție Gamification.",
          details: [
            "Portofel: Numără 'Monedele de Aur' câștigate prin transpirație.",
            "Grila Colecție: Cărți deblocate (Teme, Planuri) cu străluciri de Raritate.",
            "Item Shop: Cheltuie aur pentru a echipa skin-uri noi."
          ]
        },
        {
          id: 3,
          name: "Zona 3: Laboratorul",
          icon: "🧪",
          desc: "Analize & Dovezi Biometrice.",
          details: [
            "Grafic Forță: Trasează automat trendul 1RM Estimat pentru Genuflexiuni, Împins, Îndreptări.",
            "Carduri Corp: Grilă 2x2 pentru Greutate, BMI, TDEE, Grăsime %.",
            "Sursa Date: Scanează istoricul Hive pentru a extrage eforturile maxime."
          ]
        },
        {
          id: 4,
          name: "Zona 4: Oglinda",
          icon: "🪞",
          desc: "Galerie de Transformare Vizuală.",
          details: [
            "Timeline: Listă orizontală cu poze fizice stocate local.",
            "Unealta Comparare: Vedere Side-by-side (Prima Poză vs Ultima Poză)."
          ]
        },
        {
          id: 5,
          name: "Zona 5: Panou de Control",
          icon: "🎚️",
          desc: "Configurare Antrenor & Setări.",
          details: [
            "Protocol Accidentare: Alegi 'Umăr Drept' -> AI înlocuiește Presa Militară cu Ridicări Laterale.",
            "Profil Echipament: Comutator Sală/Acasă. Regenerează planul instant.",
            "Motor de Vârf: Setezi 'Data Nunții' -> AI calculează Macrociclul invers."
          ]
        }
      ],
      tech_title: "Arhitectura Sistemului",
      tech_subtitle: "Cum funcționează logica Profilului",
      tech_stack: [
        { title: "Algoritm Nivelare", desc: "Formula: Total XP / 1000. Gamification declanșează haptic feedback la level up." },
        { title: "Logica Gardian", desc: "Toggle-ul de Accidentare acționează ca filtru global. Scanează JSON-ul activ și șterge ID-urile interzise." },
        { title: "Stocare Locală", desc: "Pozele pentru 'Oglindă' sunt stocate în sandbox-ul securizat al telefonului, niciodată uploadate." },
        { title: "Raritate Dinamică", desc: "Marginile itemelor sunt randate prin CSS gradients bazat pe metadata: 'legendary' | 'common'." }
      ]
    },
    nutritionPage: {
      title: "Stația de Alimentare",
      subtitle: "Nutriție Dinamică sincronizată cu Antrenamentul.",
      zones: [
        {
          id: 1,
          name: "Zona 1: Panoul de Bord",
          icon: "🔋",
          desc: "Inel Calorii & Macro Split.",
          details: [
            "Inel Calorii: Indicator vizual. Verde = OK, Roșu = Surplus, Portocaliu = Subnutriție.",
            "Ținta Smart: TDEE + Modificator Fază. Creștere +250kcal. Definire scade la mentenanță.",
            "Macro Split: Proteine (Prioritate), Carbohidrați (Performanță), Grăsimi (Sănătate)."
          ]
        },
        {
          id: 2,
          name: "Zona 2: Aprovizionare",
          icon: "🛒",
          desc: "Bază de Date & Creație Personalizată.",
          details: [
            "Căutare: Interoghează DB standard + 'My Foods' (DB personal).",
            "Stația de Creație: Adaugă alimente custom (Nume, Macro) în Hive local.",
            "Filtre: Prioritizează itemele logate frecvent de tine."
          ]
        },
        {
          id: 3,
          name: "Zona 3: Jurnal Zilnic",
          icon: "📝",
          desc: "Istoric Consum & Grupare Mese.",
          details: [
            "Grupuri Mese: Liste pliabile (Mic Dejun, Prânz, Cină).",
            "Interacțiune: Swipe stânga pentru ștergere. Rând 'Total' fixat jos.",
            "Logica Adăugare: Butonul '+' injectează alimentul în slotul specific."
          ]
        },
        {
          id: 4,
          name: "Zona 4: Hidratare & Extra",
          icon: "💧",
          desc: "Tracker Apă & Suplimente.",
          details: [
            "Tracker Apă: Apasă paharul pentru +250ml. Apăsare lungă pentru reset.",
            "Checklist Suplimente: Toggle zilnic pentru Creatină și Whey. Reset la miezul nopții."
          ]
        },
        {
          id: 5,
          name: "Zona 5: Strategul",
          icon: "🧠",
          desc: "Setări Dietă aliniate cu Antrenamentul.",
          details: [
            "Preferință Dietă: Toggle Low Carb / Echilibrat. AI recalculează rațiile macro instant.",
            "Auto-Sync: Dacă e ON, Antrenorul ignoră TDEE-ul și dictează caloriile bazat pe Mesociclu (ex. scade caloriile în săptămâna de Deload)."
          ]
        }
      ],
      tech_title: "Sub Capotă",
      tech_subtitle: "Arhitectura Logică Nutriție",
      tech_stack: [
        { title: "Algoritm TDEE", desc: "Formula Mifflin-St Jeor adaptată după nivelul de activitate." },
        { title: "Sincronizare Fază", desc: "Observer Pattern. Serviciul Nutriție ascultă schimbările de stare din Serviciul Antrenament." },
        { title: "DB Local", desc: "Alimentele custom sunt stocate în cutia Hive 'user_foods' pentru acces offline." },
        { title: "State Management", desc: "Provider Reactiv actualizează 'Calorii Rămase' instant în tot UI-ul." }
      ]
    },
    legal: {
      privacy_title: "Politica de Confidențialitate",
      terms_title: "Termeni & Disclaimer Medical",
      updated: "Ultima actualizare: Decembrie 2024",
      privacy_content: [
        { h: "1. Colectarea Datelor", p: "Colectăm adresa ta de email strict pentru lista de așteptare. Nu vindem datele tale către terți." },
        { h: "2. Date de Sănătate", p: "În aplicația viitoare, toate datele de sănătate (greutate, poze) vor fi stocate local pe dispozitiv sau criptate securizat în cloud." },
        { h: "3. Drepturile Tale", p: "Poți solicita ștergerea datelor tale oricând contactând support@nrstrength.com." }
      ],
      terms_content: [
        { h: "1. Disclaimer Medical (CRITIC)", p: "NRStrength nu este o aplicație medicală. Exercițiile și sugestiile AI sunt doar în scop informativ. Consultă un medic înainte de a începe orice program. Folosind aplicația, ești de acord că te antrenezi pe propriul risc." },
        { h: "2. Proprietate Intelectuală", p: "Codul, designul și logica 'Antrenor Super Inteligent' sunt proprietatea NRStrength." },
        { h: "3. Conduită", p: "Ne rezervăm dreptul de a bloca utilizatorii care încearcă să spargă, să copieze sau să abuzeze de platformă." }
      ]
    }
  }
};