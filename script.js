/* =========================================================
   NEXT — MAIN JAVASCRIPT
   No backend required.
   ========================================================= */


/* =========================================================
   OPPORTUNITIES DATA
   ========================================================= */

const opportunities = [

  {
    id: 1,
    title: "Advanced Technology Pioneers 2026",
    org: "ATRC / ChallengeON",
    type: "Competition",
    field: ["Technology", "Research"],
    location: "Abu Dhabi",
    mode: "In person",
    date: "2026-10-11",
    deadline: "Oct 11",
    skills: ["Problem Solving", "Innovation"],
    why: "A UAE challenge built around real-world technology and innovation problems.",
    url: "https://challengeon.atrc.ae/en/challenges/atp2026",
    lat: 24.4539,
    lng: 54.3773
  },

  {
    id: 2,
    title: "UAE Hackathon",
    org: "TDRA",
    type: "Hackathon",
    field: ["Technology", "Business"],
    location: "Sharjah",
    mode: "In person",
    date: "2026-10-20",
    deadline: "Oct 20",
    skills: ["AI", "Problem Solving", "Teamwork"],
    why: "A national innovation challenge where students can work on real problems.",
    url: "https://hackathon.ae/",
    lat: 25.3463,
    lng: 55.4209
  },

  {
    id: 3,
    title: "Arab Youth Space Hackathon",
    org: "UAE Space Agency / Space42",
    type: "Hackathon",
    field: ["Technology", "Research"],
    location: "Online",
    mode: "Online",
    date: "2026-09-25",
    deadline: "Sep 25",
    skills: ["AI", "Research", "Innovation"],
    why: "A space-focused challenge combining technology, research and innovation.",
    url: "https://spaceacademy-hackathons.space.gov.ae/",
    lat: null,
    lng: null
  },

  {
    id: 4,
    title: "Open Technology Internships",
    org: "OpenIntern",
    type: "Internship",
    field: ["Technology"],
    location: "Online",
    mode: "Remote",
    date: "2026-12-01",
    deadline: "Rolling",
    skills: ["Development", "Software"],
    why: "A public source for discovering technology internship opportunities.",
    url: "https://openintern.dev/",
    lat: null,
    lng: null
  },

  {
    id: 5,
    title: "Google UX / Design Community Events",
    org: "Google Developer Groups",
    type: "Workshop",
    field: ["Design", "Technology"],
    location: "Dubai",
    mode: "In person / Online",
    date: "2026-09-14",
    deadline: "See event",
    skills: ["UX Research", "Figma", "Design"],
    why: "Useful for students building practical design and technology skills.",
    url: "https://gdg.community.dev/",
    lat: 25.2048,
    lng: 55.2708
  },

  {
    id: 6,
    title: "DesignAthon 2026",
    org: "+TWE × GDGoC",
    type: "Competition",
    field: ["Design", "Technology"],
    location: "Dubai",
    mode: "In person",
    date: "2026-09-20",
    deadline: "Sep 20",
    skills: ["UI/UX", "Research", "Portfolio"],
    why: "A student design challenge focused on solving a meaningful university problem.",
    url: "https://gdg.community.dev/",
    lat: 25.2048,
    lng: 55.2708
  },

  {
    id: 7,
    title: "Career & Networking Opportunities",
    org: "Student Communities",
    type: "Career Fair",
    field: ["Business", "Marketing", "Communication"],
    location: "Dubai",
    mode: "In person",
    date: "2026-09-25",
    deadline: "See event",
    skills: ["Networking", "Communication", "Career"],
    why: "Useful for meeting professionals, learning about roles and building connections.",
    url: "https://www.linkedin.com/",
    lat: 25.2048,
    lng: 55.2708
  },

  {
    id: 8,
    title: "Build with AI Community Events",
    org: "Google Developer Groups",
    type: "Event",
    field: ["Technology"],
    location: "Ras Al Khaimah",
    mode: "In person",
    date: "2026-11-26",
    deadline: "See event",
    skills: ["AI", "Google ADK", "Development"],
    why: "Hands-on community learning for students exploring AI and development.",
    url: "https://gdg.community.dev/",
    lat: 25.7895,
    lng: 55.9432
  },

  {
    id: 9,
    title: "Portfolio Review Session",
    org: "Creative Computing Community",
    type: "Workshop",
    field: ["Design", "Creativity"],
    location: "Online",
    mode: "Online",
    date: "2026-10-03",
    deadline: "Oct 3",
    skills: ["Portfolio", "Presentation", "Design"],
    why: "Helps students turn university projects into stronger portfolio evidence.",
    url: "https://gdg.community.dev/",
    lat: null,
    lng: null
  },

  {
    id: 10,
    title: "Creative Technology Project Challenge",
    org: "Student Innovation Community",
    type: "Competition",
    field: ["Design", "Technology", "Creativity"],
    location: "Online",
    mode: "Online",
    date: "2026-10-10",
    deadline: "Oct 10",
    skills: ["Prototyping", "UI/UX", "Creative Technology"],
    why: "A good fit for students who enjoy combining creativity and technology.",
    url: "https://gdg.community.dev/",
    lat: null,
    lng: null
  }

];


/* =========================================================
   CAREER DATA
   ========================================================= */

const careers = [

  {
    id: "ux-ui",
    role: "UX/UI Designer",
    fields: ["Design", "Creativity", "Technology"],
    icon: "01",
    about:
      "UX/UI designers create digital products that are easy, useful and enjoyable to use. They combine user research, visual design and interaction thinking.",
    scope:
      "UX/UI skills can lead into product teams, technology companies, agencies, startups, e-commerce and digital services.",
    salary:
      "Approx. AED 3,500–10,000+ / month",
    salaryNote:
      "Indicative UAE estimate; actual pay varies by experience, company and role.",
    skills: [
      "Figma",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ],
    day:
      "A typical week can involve understanding users, creating flows, designing screens, testing ideas and working with developers.",
    interests:
      "Design, creativity, technology and problem solving"
  },

  {
    id: "product-designer",
    role: "Product Designer",
    fields: ["Design", "Technology", "Business"],
    icon: "02",
    about:
      "Product designers think about the complete experience of a digital product — from the user's problem to the final interface.",
    scope:
      "Product design is useful across startups, technology companies, fintech, e-commerce, SaaS and digital products.",
    salary:
      "Approx. AED 5,000–15,000+ / month",
    salaryNote:
      "Indicative UAE estimate; senior roles can vary considerably.",
    skills: [
      "UX/UI",
      "Product Thinking",
      "Research",
      "Figma",
      "Design Systems",
      "Communication"
    ],
    day:
      "You may work with researchers, developers and product managers to decide what should be built and how it should work.",
    interests:
      "Design, technology, business and problem solving"
  },

  {
    id: "social-media",
    role: "Social Media Strategist",
    fields: ["Marketing", "Creativity", "Communication", "Media"],
    icon: "03",
    about:
      "Social media strategists plan how brands communicate across platforms. They combine creativity, content planning, audience understanding and analytics.",
    scope:
      "Roles exist in agencies, brands, startups, entertainment, fashion, hospitality, media and creator-focused businesses.",
    salary:
      "Approx. AED 3,000–8,000+ / month",
    salaryNote:
      "Indicative UAE estimate; salary depends strongly on experience and company.",
    skills: [
      "Content Strategy",
      "Copywriting",
      "Social Analytics",
      "Campaign Planning",
      "Trend Research",
      "Creative Direction"
    ],
    day:
      "You could plan content, research trends, develop campaigns, review analytics and work with designers or creators.",
    interests:
      "Marketing, creativity, media and communication"
  },

  {
    id: "marketing",
    role: "Marketing Specialist",
    fields: ["Marketing", "Business", "Communication", "Research"],
    icon: "04",
    about:
      "Marketing specialists help organizations understand audiences and promote products, services or ideas through campaigns and communication.",
    scope:
      "Marketing exists across almost every industry, including technology, retail, hospitality, finance, healthcare and creative businesses.",
    salary:
      "Approx. AED 2,500–10,000+ / month",
    salaryNote:
      "Indicative UAE estimate; current salary data varies by specialization.",
    skills: [
      "Market Research",
      "Content",
      "Analytics",
      "Campaigns",
      "Communication",
      "Strategy"
    ],
    day:
      "You might research audiences, plan campaigns, write briefs, coordinate content and measure campaign performance.",
    interests:
      "Marketing, business, communication and research"
  },

  {
    id: "ux-researcher",
    role: "UX Researcher",
    fields: ["Research", "Design", "Communication"],
    icon: "05",
    about:
      "UX researchers study users, behaviours and needs so teams can make better product decisions.",
    scope:
      "UX research can be found in technology, consulting, product companies, agencies and organizations building digital services.",
    salary:
      "Approx. AED 5,000–12,000+ / month",
    salaryNote:
      "Indicative UAE estimate.",
    skills: [
      "User Interviews",
      "Usability Testing",
      "Research",
      "Analysis",
      "Surveys",
      "Communication"
    ],
    day:
      "You may interview users, analyse feedback, test prototypes and communicate insights to designers and product teams.",
    interests:
      "Research, design, communication and problem solving"
  },

  {
    id: "creative-technologist",
    role: "Creative Technologist",
    fields: ["Technology", "Design", "Creativity"],
    icon: "06",
    about:
      "Creative technologists combine design, code and emerging technology to create interactive experiences, prototypes and experiments.",
    scope:
      "The role can appear in creative agencies, innovation teams, studios, advertising, interactive media and emerging technology projects.",
    salary:
      "Approx. AED 5,000–12,000+ / month",
    salaryNote:
      "Indicative UAE estimate.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Prototyping",
      "Interaction Design",
      "Creative Coding",
      "AI Tools"
    ],
    day:
      "You could prototype interactions, experiment with new technologies and work between designers, developers and creative teams.",
    interests:
      "Technology, design, creativity and experimentation"
  },

  {
    id: "market-research",
    role: "Market Research Analyst",
    fields: ["Research", "Business", "Marketing"],
    icon: "07",
    about:
      "Market research analysts collect and interpret information about customers, markets and competitors to support business decisions.",
    scope:
      "Research skills are useful in consulting, marketing, consumer research, technology, retail and business strategy.",
    salary:
      "Approx. AED 4,000–10,000+ / month",
    salaryNote:
      "Indicative UAE estimate.",
    skills: [
      "Research",
      "Data Analysis",
      "Surveys",
      "Consumer Behaviour",
      "Reporting",
      "Presentation"
    ],
    day:
      "Work can involve designing surveys, analysing responses, researching competitors and turning information into recommendations.",
    interests:
      "Research, business, marketing and analytical thinking"
  },

  {
    id: "project-coordinator",
    role: "Project Coordinator",
    fields: ["Business", "Communication", "Problem Solving"],
    icon: "08",
    about:
      "Project coordinators help teams organize tasks, timelines, communication and deliverables.",
    scope:
      "Project coordination is useful across technology, events, marketing, construction, consulting and creative industries.",
    salary:
      "Approx. AED 3,500–9,000+ / month",
    salaryNote:
      "Indicative UAE estimate.",
    skills: [
      "Planning",
      "Communication",
      "Project Tools",
      "Organisation",
      "Teamwork",
      "Problem Solving"
    ],
    day:
      "You may track tasks, coordinate meetings, communicate updates and help teams stay on schedule.",
    interests:
      "Business, communication, organization and problem solving"
  }

];


/* =========================================================
   HELPERS
   ========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];


/* =========================================================
   THEME
   ========================================================= */

function setTheme() {

  const savedTheme =
    localStorage.getItem("next-theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  updateThemeIcon();

  $("#themeToggle")?.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
      document.body.classList.contains("light");

    localStorage.setItem(
      "next-theme",
      isLight ? "light" : "dark"
    );

    updateThemeIcon();

  });

}


function updateThemeIcon() {

  const button = $("#themeToggle");

  if (!button) return;

  button.textContent =
    document.body.classList.contains("light")
      ? "☾"
      : "☼";

}


/* =========================================================
   MOBILE NAV
   ========================================================= */

function initMobileMenu() {

  const menu = $("#mobileMenu");
  const nav = $("#navLinks");

  if (!menu || !nav) return;

  menu.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      nav.classList.remove("mobile-open");
    });

  });

}


/* =========================================================
   SAVED OPPORTUNITIES
   ========================================================= */

function getSavedIds() {

  return JSON.parse(
    localStorage.getItem("next-saved") || "[]"
  );

}


function toggleSaved(id) {

  let saved = getSavedIds();

  if (saved.includes(id)) {

    saved = saved.filter(
      savedId => savedId !== id
    );

  } else {

    saved.push(id);

  }

  localStorage.setItem(
    "next-saved",
    JSON.stringify(saved)
  );

}


/* =========================================================
   OPPORTUNITY CARD
   ========================================================= */

function opportunityCard(opportunity) {

  const saved =
    getSavedIds().includes(opportunity.id);

  return `

    <article class="opp-card">

      <div class="opp-number">
        ${String(opportunity.id).padStart(2, "0")}
      </div>

      <div class="opp-main">

        <div class="opp-topline">
          <span>${opportunity.type}</span>
          <span>${opportunity.location}</span>
        </div>

        <h3>
          ${opportunity.title}
        </h3>

        <p class="opp-org">
          ${opportunity.org}
        </p>

        <div class="tags">

          ${opportunity.skills
            .map(skill =>
              `<span class="tag">${skill}</span>`
            )
            .join("")
          }

        </div>

      </div>


      <div class="why">

        <span>
          WHY IT MATTERS
        </span>

        <p>
          ${opportunity.why}
        </p>

      </div>


      <div class="opp-actions">

        <button
          class="save-btn ${saved ? "saved" : ""}"
          data-save="${opportunity.id}"
          aria-label="Save opportunity"
        >
          ${saved ? "★" : "☆"}
        </button>

        <a
          class="visit-btn"
          href="${opportunity.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit ↗
        </a>

      </div>

    </article>

  `;

}


/* =========================================================
   SAVE BUTTONS
   ========================================================= */

function bindSaveButtons() {

  $$("[data-save]").forEach(button => {

    button.addEventListener("click", () => {

      const id =
        Number(button.dataset.save);

      toggleSaved(id);

      renderHome();
      renderOpportunities();

    });

  });

}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  const container =
    $("#homeOpportunities");

  if (!container) return;

  container.innerHTML =
    opportunities
      .slice(0, 3)
      .map(opportunityCard)
      .join("");

  bindSaveButtons();

}


function initHomeSearch() {

  const form = $("#homeSearch");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const query =
      $("#homeSearchInput")
        .value
        .trim();

    if (!query) {

      window.location.href =
        "opportunities.html";

      return;

    }

    window.location.href =
      `opportunities.html?q=${encodeURIComponent(query)}`;

  });

}


/* =========================================================
   OPPORTUNITIES
   ========================================================= */

let activeType = "All";
let nearMode = false;


function renderOpportunities() {

  const list =
    $("#opportunityList");

  if (!list) return;


  const query =
    ($("#oppSearchInput")?.value || "")
      .toLowerCase()
      .trim();

  const field =
    $("#fieldFilter")?.value || "All";

  const location =
    $("#locationFilter")?.value || "All";

  const sort =
    $("#sortFilter")?.value || "relevance";


  let results =
    opportunities.filter(opportunity => {

      const searchableText = [

        opportunity.title,
        opportunity.org,
        opportunity.type,
        opportunity.location,
        opportunity.mode,

        ...opportunity.field,
        ...opportunity.skills

      ]
      .join(" ")
      .toLowerCase();


      const matchesSearch =
        !query ||
        searchableText.includes(query);


      const matchesType =
        activeType === "All" ||
        opportunity.type === activeType;


      const matchesField =
        field === "All" ||
        opportunity.field.includes(field);


      const matchesLocation =
        location === "All" ||
        opportunity.location === location;


      const matchesNear =
        !nearMode ||
        opportunity.location === "Dubai" ||
        opportunity.location === "Sharjah" ||
        opportunity.location === "Ras Al Khaimah";


      return (
        matchesSearch &&
        matchesType &&
        matchesField &&
        matchesLocation &&
        matchesNear
      );

    });


  if (sort === "soon") {

    results.sort(
      (a, b) =>
        a.date.localeCompare(b.date)
    );

  }


  $("#resultCount").textContent =
    `${results.length} ${
      results.length === 1
        ? "opportunity"
        : "opportunities"
    }`;


  list.innerHTML =
    results
      .map(opportunityCard)
      .join("");


  $("#emptyState").hidden =
    results.length !== 0;


  bindSaveButtons();

}


function initOpportunities() {

  if (!$("#opportunityList")) return;


  const params =
    new URLSearchParams(
      window.location.search
    );


  const type =
    params.get("type");

  const query =
    params.get("q");


  if (type) {

    activeType = type;

    $$(".chip").forEach(chip => {

      chip.classList.toggle(
        "active",
        chip.dataset.type === type
      );

    });

  }


  if (query) {

    $("#oppSearchInput").value =
      query;

  }


  $$("#typeFilters .chip")
    .forEach(chip => {

      chip.addEventListener(
        "click",
        () => {

          activeType =
            chip.dataset.type;

          $$("#typeFilters .chip")
            .forEach(item =>
              item.classList.remove("active")
            );

          chip.classList.add("active");

          renderOpportunities();

        }
      );

    });


  [
    "oppSearchInput",
    "fieldFilter",
    "locationFilter",
    "sortFilter"
  ]
  .forEach(id => {

    $("#" + id)?.addEventListener(
      "input",
      renderOpportunities
    );

    $("#" + id)?.addEventListener(
      "change",
      renderOpportunities
    );

  });


  $("#oppSearch")
    ?.addEventListener("submit", event => {

      event.preventDefault();

      renderOpportunities();

    });


  $("#clearFilters")
    ?.addEventListener("click", () => {

      activeType = "All";
      nearMode = false;

      $("#oppSearchInput").value = "";
      $("#fieldFilter").value = "All";
      $("#locationFilter").value = "All";
      $("#sortFilter").value = "relevance";

      $$("#typeFilters .chip")
        .forEach(chip => {

          chip.classList.toggle(
            "active",
            chip.dataset.type === "All"
          );

        });

      const nearButton =
        $("#nearMe");

      if (nearButton) {
        nearButton.textContent =
          "◎ Near me";
      }

      renderOpportunities();

    });


  $("#nearMe")
    ?.addEventListener("click", () => {

      if (!navigator.geolocation) {

        alert(
          "Location is not supported by this browser."
        );

        return;

      }


      navigator.geolocation.getCurrentPosition(

        position => {

          nearMode = true;

          $("#nearMe").textContent =
            "◎ Near me · on";

          sortByDistance(
            position.coords.latitude,
            position.coords.longitude
          );

          renderOpportunities();

        },

        () => {

          alert(
            "Location access was not allowed. Showing all opportunities."
          );

        }

      );

    });


  renderOpportunities();

}


/* =========================================================
   DISTANCE
   ========================================================= */

function distanceInKm(
  lat1,
  lon1,
  lat2,
  lon2
) {

  if (
    lat1 === null ||
    lon1 === null ||
    lat2 === null ||
    lon2 === null
  ) {
    return Infinity;
  }


  const earthRadius = 6371;

  const dLat =
    (lat2 - lat1) *
    Math.PI / 180;

  const dLon =
    (lon2 - lon1) *
    Math.PI / 180;


  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;


  return (
    earthRadius *
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    )
  );

}


function sortByDistance(lat, lng) {

  opportunities.sort((a, b) => {

    const distanceA =
      distanceInKm(
        lat,
        lng,
        a.lat,
        a.lng
      );

    const distanceB =
      distanceInKm(
        lat,
        lng,
        b.lat,
        b.lng
      );

    return distanceA - distanceB;

  });

}


/* =========================================================
   CAREER PAGE
   ========================================================= */

let selectedInterests =
  new Set();


function initCareer() {

  if (!$("#careerGrid")) return;


  const saved =
    JSON.parse(
      localStorage.getItem(
        "next-interests"
      ) || "[]"
    );


  selectedInterests =
    new Set(saved);


  $$("#interestGrid button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const interest =
            button.dataset.interest;


          if (
            selectedInterests.has(
              interest
            )
          ) {

            selectedInterests.delete(
              interest
            );

          } else {

            selectedInterests.add(
              interest
            );

          }


          updateInterestButtons();

        }
      );

    });


  $("#showPaths")
    ?.addEventListener(
      "click",
      showCareerResults
    );


  $("#careerSearchButton")
    ?.addEventListener(
      "click",
      searchCareers
    );


  $("#careerSearch")
    ?.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          searchCareers();

        }

      }
    );


  $("#modalClose")
    ?.addEventListener(
      "click",
      closeCareerModal
    );


  $("#modalBackdrop")
    ?.addEventListener(
      "click",
      closeCareerModal
    );


  updateInterestButtons();

  showCareerResults();

}


function updateInterestButtons() {

  $$("#interestGrid button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        selectedInterests.has(
          button.dataset.interest
        )
      );

    });


  const count =
    selectedInterests.size;

  if ($("#selectionCount")) {

    $("#selectionCount").textContent =
      `${count} ${
        count === 1
          ? "interest"
          : "interests"
      } selected`;

  }

}


function searchCareers() {

  const input =
    $("#careerSearch")
      ?.value
      .toLowerCase()
      .trim();


  if (!input) {

    showCareerResults();

    return;

  }


  const words =
    input
      .split(/[,\s+]+/)
      .filter(Boolean);


  const matches =
    careers.filter(career => {

      const searchable = [

        career.role,
        career.about,
        career.scope,
        career.interests,

        ...career.fields,
        ...career.skills

      ]
      .join(" ")
      .toLowerCase();


      return words.some(
        word =>
          searchable.includes(word)
      );

    });


  renderCareerCards(
    matches.length
      ? matches
      : careers
  );


  $("#careerResults")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


function showCareerResults() {

  localStorage.setItem(
    "next-interests",
    JSON.stringify(
      [...selectedInterests]
    )
  );


  let matches;


  if (!selectedInterests.size) {

    matches =
      careers.slice(0, 6);

  } else {

    matches =
      careers.filter(career =>
        career.fields.some(
          field =>
            selectedInterests.has(
              field
            )
        )
      );

  }


  renderCareerCards(matches);


  $("#careerResults")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


function renderCareerCards(list) {

  const grid =
    $("#careerGrid");

  if (!grid) return;


  if (!list.length) {

    grid.innerHTML = `
      <div class="career-empty">
        <h3>No exact match yet.</h3>
        <p>
          Try a broader interest such as design,
          technology, marketing or research.
        </p>
      </div>
    `;

    return;

  }


  grid.innerHTML =
    list.map(career => `

      <article class="career-card">

        <div class="career-card-top">

          <span class="career-index">
            ${career.icon}
          </span>

          <span class="career-match">
            CAREER PATH
          </span>

        </div>


        <h3>
          ${career.role}
        </h3>

        <p>
          ${career.about}
        </p>


        <div class="career-preview">

          <div>

            <span>
              EST. UAE RANGE
            </span>

            <b>
              ${career.salary}
            </b>

          </div>

          <div>

            <span>
              BUILDS
            </span>

            <b>
              ${career.skills
                .slice(0, 2)
                .join(" · ")
              }
            </b>

          </div>

        </div>


        <button
          class="career-view"
          data-career="${career.id}"
        >
          Explore this career →
        </button>

      </article>

    `)
    .join("");


  $$("[data-career]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openCareerModal(
            button.dataset.career
          );

        }
      );

    });

}


function openCareerModal(id) {

  const career =
    careers.find(
      item => item.id === id
    );


  if (!career) return;


  $("#careerModalContent").innerHTML = `

    <div class="modal-eyebrow">
      CAREER PATH
    </div>

    <h2>
      ${career.role}
    </h2>

    <p class="modal-about">
      ${career.about}
    </p>


    <div class="career-detail-grid">

      <div class="detail-box">

        <span>
          WHAT IS IT?
        </span>

        <p>
          ${career.about}
        </p>

      </div>


      <div class="detail-box">

        <span>
          SCOPE
        </span>

        <p>
          ${career.scope}
        </p>

      </div>


      <div class="detail-box salary-box">

        <span>
          ESTIMATED UAE SALARY
        </span>

        <strong>
          ${career.salary}
        </strong>

        <small>
          ${career.salaryNote}
        </small>

      </div>


      <div class="detail-box">

        <span>
          WHAT YOU'LL BUILD
        </span>

        <div class="modal-tags">

          ${career.skills
            .map(skill =>
              `<span>${skill}</span>`
            )
            .join("")
          }

        </div>

      </div>

    </div>


    <div class="day-box">

      <span>
        WHAT THE WORK CAN LOOK LIKE
      </span>

      <p>
        ${career.day}
      </p>

    </div>


    <div class="modal-footer">

      <a
        class="button button-accent"
        href="opportunities.html?q=${encodeURIComponent(
          career.skills.join(" ")
        )}"
      >
        Find opportunities for this path →
      </a>

    </div>

  `;


  $("#careerModal")
    .classList.add("open");

  document.body.classList.add(
    "modal-open"
  );

}


function closeCareerModal() {

  $("#careerModal")
    ?.classList.remove("open");

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   START
   ========================================================= */

setTheme();
initMobileMenu();

renderHome();
initHomeSearch();

initOpportunities();
initCareer();
/* =========================================================
   NEXT — CINEMATIC MOTION LAYER
   This layer intentionally runs after the existing app logic.
   ========================================================= */
(function NEXTMotion(){
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function injectLoader(){
    if(reduced) return;
    if(document.body.getAttribute('data-page') !== 'home') return;
    if(document.querySelector('.next-loader')) return;

    const loader = document.createElement('div');
    loader.className = 'next-loader';
    loader.innerHTML = `
      <span class="loader-pixel p1"></span>
      <span class="loader-pixel p2"></span>
      <span class="loader-pixel p3"></span>
      <span class="loader-pixel p4"></span>
      <div class="next-loader-inner">
        <div class="next-loader-mark">
          <div class="next-loader-symbol">N×</div>
        </div>
        <div class="next-loader-kicker">A STUDENT DISCOVERY PLATFORM</div>
        <h1 class="next-loader-title">FIND WHAT'S <span>NEXT.</span></h1>
        <div class="next-loader-sub">DISCOVER · EXPLORE · BUILD · MOVE FORWARD</div>
        <div class="next-loader-progress"><i></i></div>
        <div class="next-loader-meta"><span>INITIALISING YOUR PATH</span><span class="next-loader-percent">0%</span></div>
      </div>`;
    document.body.prepend(loader);

    const bar = loader.querySelector('.next-loader-progress i');
    const pct = loader.querySelector('.next-loader-percent');
    let value = 0;
    const start = performance.now();
    const duration = 1450;

    function tick(now){
      const progress = Math.min(1,(now-start)/duration);
      const eased = 1-Math.pow(1-progress,3);
      value = Math.round(eased*100);
      bar.style.width = value+'%';
      pct.textContent = value+'%';
      if(progress<1){ requestAnimationFrame(tick); }
      else{
        setTimeout(()=>loader.classList.add('is-done'),260);
        setTimeout(()=>loader.remove(),1050);
      }
    }
    requestAnimationFrame(tick);
  }

  function addScrollProgress(){
    if(document.querySelector('.next-scroll-progress')) return;
    const el=document.createElement('div');
    el.className='next-scroll-progress';
    el.innerHTML='<i></i>';
    document.body.appendChild(el);
    const bar=el.firstElementChild;
    const update=()=>{
      const max=document.documentElement.scrollHeight-window.innerHeight;
      bar.style.width=(max>0 ? (window.scrollY/max)*100 : 0)+'%';
    };
    window.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    update();
  }

  function addAmbient(){
    if(document.querySelector('.next-ambient')) return;
    const el=document.createElement('div');
    el.className='next-ambient';
    el.setAttribute('aria-hidden','true');
    el.innerHTML='<i></i><i></i><i></i><i></i>';
    document.body.appendChild(el);
  }

  function mark(selector,mode='up',limit=999){
    [...document.querySelectorAll(selector)].slice(0,limit).forEach((el,i)=>{
      if(el.classList.contains('motion-reveal')) return;
      el.classList.add('motion-reveal');
      if(mode==='left') el.classList.add('motion-left');
      if(mode==='right') el.classList.add('motion-right');
      if(mode==='pop') el.classList.add('motion-pop');
      el.style.setProperty('--motion-delay',Math.min(i*75,450)+'ms');
    });
  }

  function setupReveals(){
    mark('.section-head','up');
    mark('.category-card','pop');
    mark('.opportunity-card','up');
    mark('.career-card','pop');
    mark('.research-card','left');
    mark('.why-card','right');
    mark('.problem-card','up');
    mark('.detail-box','up');
    mark('.career-banner','right');
    mark('.research-stat','pop');
    mark('.hero-note','up');

    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -7% 0px'});

    document.querySelectorAll('.motion-reveal').forEach(el=>observer.observe(el));
  }

  function setupParallax(){
    if(reduced) return;
    const hero=document.querySelector('.hero-visual');
    if(!hero) return;
    let ticking=false;
    const update=()=>{
      const y=window.scrollY;
      const amount=Math.min(y*.075,42);
      hero.style.setProperty('--hero-y',amount+'px');
      hero.style.setProperty('--hero-scale',String(Math.max(.96,1-y*.00008)));
      ticking=false;
    };
    window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
    update();
  }

  function setupScrollPop(){
    const visual=document.querySelector('.hero-visual');
    if(!visual || reduced) return;
    let last=window.scrollY;
    window.addEventListener('scroll',()=>{
      const delta=window.scrollY-last;
      if(Math.abs(delta)>5){
        visual.style.setProperty('--hero-x',Math.max(-8,Math.min(8,delta*.35))+'px');
      }
      last=window.scrollY;
    },{passive:true});
  }

  function setupCountUps(){
    document.querySelectorAll('[data-count]').forEach(el=>{
      const target=parseFloat(el.dataset.count);
      if(Number.isNaN(target)) return;
      const suffix=el.dataset.suffix||'';
      const decimals=el.dataset.decimals?parseInt(el.dataset.decimals,10):0;
      const obs=new IntersectionObserver(entries=>{
        if(!entries[0].isIntersecting) return;
        const start=performance.now(), duration=1100;
        function frame(now){
          const p=Math.min(1,(now-start)/duration),e=1-Math.pow(1-p,3);
          el.textContent=(target*e).toFixed(decimals)+suffix;
          if(p<1) requestAnimationFrame(frame); else el.textContent=target.toFixed(decimals)+suffix;
        }
        requestAnimationFrame(frame); obs.disconnect();
      },{threshold:.7});
      obs.observe(el);
    });
  }

  function setupPageLinks(){
    document.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href');
      if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || a.target==='_blank') return;
      a.addEventListener('click',e=>{
        if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
        if(href.startsWith('javascript:')) return;
        e.preventDefault();
        document.body.classList.add('is-leaving');
        setTimeout(()=>window.location.href=href,260);
      });
    });
  }

  function setupMagneticButtons(){
    if(reduced) return;
    document.querySelectorAll('.button,.hero-search button,.theme-btn').forEach(btn=>{
      btn.addEventListener('pointermove',e=>{
        const r=btn.getBoundingClientRect();
        const x=(e.clientX-r.left-r.width/2)*.08;
        const y=(e.clientY-r.top-r.height/2)*.08;
        btn.style.transform=`translate(${x}px,${y}px)`;
      });
      btn.addEventListener('pointerleave',()=>btn.style.transform='');
    });
  }

  function init(){
    injectLoader();
    addScrollProgress();
    addAmbient();
    setupReveals();
    setupParallax();
    setupScrollPop();
    setupCountUps();
    setupPageLinks();
    setupMagneticButtons();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
