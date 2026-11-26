/* Alpha Douro — GA4 (G-M9WJDM6B19) + EU GDPR Consent Mode v2 + Conversion Engine */
(function () {
  const GA_ID = "G-M9WJDM6B19";
  const CONSENT_KEY = "ad_consent_v2";
  const UTM_KEY = "ad_utm_ctx";

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  /* 1. Capture & persist UTM / hotel partner ref (?ref=hotel) across pages */
  try {
    const sp = new URLSearchParams(window.location.search);
    const utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "ref", "gclid"].forEach((k) => {
      if (sp.get(k)) utm[k] = sp.get(k);
    });
    if (Object.keys(utm).length) {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
    }
  } catch (_) {}

  function getUtm() {
    try { return JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}"); } catch (_) { return {}; }
  }

  function track(eventName, params) {
    try {
      const utm = getUtm();
      const payload = Object.assign(
        {
          page_path: window.location.pathname,
          page_lang: document.documentElement.lang || "pt-PT",
          partner_ref: utm.ref || "(direct)"
        },
        params || {}
      );
      gtag("event", eventName, payload);
    } catch (_) {}
  }
  window.adTrack = track;

  /* 2. Infer tour & estimated EUR conversion value from WhatsApp message / element */
  function classifyWhatsApp(href, el) {
    const txt = ((href || "") + " " + (el && el.id ? el.id : "") + " " + (el && el.textContent ? el.textContent : "")).toLowerCase();
    if (/natal|christmas|voucher|cart[aã]o vip|gift|cgift/.test(txt)) {
      return { tour: "natal_voucher", value: 60 };
    }
    if (/privad|private|charter|cprivate|casamento|proposal/.test(txt)) {
      return { tour: "charter_privado", value: 350 };
    }
    if (/sunset|csunset|60/.test(txt)) {
      return { tour: "sunset_mar", value: 120 };
    }
    if (/7.?pontes|7.?bridges|cbridges|30/.test(txt)) {
      return { tour: "cruzeiro_7_pontes", value: 60 };
    }
    return { tour: "direct_whatsapp", value: 60 };
  }

  /* 3. Delegated high-intent conversion listener (zero impact on scroll/INP) */
  document.addEventListener("click", function (ev) {
    const el = ev.target && ev.target.closest ? ev.target.closest("a, button") : null;
    if (!el) return;
    const href = (el.getAttribute("href") || "").trim();
    const id = el.id || "";

    if (/wa\.me\/|api\.whatsapp\.com/i.test(href)) {
      const info = classifyWhatsApp(href, el);
      track("whatsapp_booking_click", {
        tour_name: info.tour,
        value: info.value,
        currency: "EUR",
        link_id: id || "wa_cta"
      });
      /* Standard GA4 recommended Key Event for easy Google Ads import */
      track("generate_lead", {
        lead_source: "whatsapp",
        tour_name: info.tour,
        value: info.value,
        currency: "EUR"
      });
      if (info.tour === "natal_voucher") {
        track("gift_voucher_click", { value: 60, currency: "EUR" });
      }
      return;
    }

    if (/google\.com\/maps|maps\.apple\.com/i.test(href)) {
      track("maps_pontao_a_click", { provider: /apple/i.test(href) ? "apple_maps" : "google_maps" });
      return;
    }

    if (/^tel:/i.test(href)) {
      track("phone_call_click", { method: "tel" });
      track("generate_lead", { lead_source: "phone", value: 60, currency: "EUR" });
      return;
    }

    if (/^mailto:/i.test(href)) {
      track("email_click", { method: "mailto" });
      return;
    }

    if (/instagram\.com\/alphadouro/i.test(href)) {
      track("instagram_profile_click", {});
      return;
    }

    if (id === "btnSavePng") {
      track("boarding_pass_download", { format: "png" });
      return;
    }

    if (id === "btnAddCal") {
      track("calendar_reminder_add", { format: "ics" });
      return;
    }
  }, { passive: true });

  /* Track digital boarding pass view automatically on /pass/ */
  if (/\/pass\/?/i.test(window.location.pathname)) {
    track("boarding_pass_view", { pass_type: "digital_vip" });
  }

  /* Track 75% scroll engagement once */
  let sentScroll75 = false;
  window.addEventListener("scroll", function () {
    if (sentScroll75) return;
    const h = document.documentElement;
    const max = (h.scrollHeight || 1) - window.innerHeight;
    if (max > 300 && (window.scrollY / max) >= 0.75) {
      sentScroll75 = true;
      track("scroll_depth_75", {});
    }
  }, { passive: true });

  /* 4. Minimalist Quiet-Luxury EU GDPR Consent Banner (Consent Mode v2) */
  function applyConsent(granted) {
    const state = granted ? "granted" : "denied";
    gtag("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state
    });
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ state: state, ts: Date.now(), v: 2 }));
    } catch (_) {}
  }

  function showConsentPill() {
    try {
      if (localStorage.getItem(CONSENT_KEY)) return;
    } catch (_) {}
    const lang = (document.documentElement.lang || "pt").slice(0, 2).toLowerCase();
    const copy = {
      pt: { txt: "Utilizamos cookies analíticos para melhorar a sua experiência e medir reservas.", acc: "Aceitar", dec: "Recusar" },
      en: { txt: "We use analytics cookies to refine your experience and measure bookings.", acc: "Accept", dec: "Decline" },
      es: { txt: "Usamos cookies analíticas para mejorar su experiencia y medir reservas.", acc: "Aceptar", dec: "Rechazar" },
      de: { txt: "Wir nutzen Analyse-Cookies zur Optimierung Ihres Erlebnisses.", acc: "Akzeptieren", dec: "Ablehnen" },
      fr: { txt: "Nous utilisons des cookies analytiques pour améliorer votre expérience.", acc: "Accepter", dec: "Refuser" }
    }[lang] || { txt: "Utilizamos cookies analíticos para melhorar a sua experiência.", acc: "Aceitar", dec: "Recusar" };

    const bar = document.createElement("aside");
    bar.id = "adConsentBar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookies");
    bar.style.cssText = [
      "position:fixed", "left:16px", "bottom:16px", "z-index:9998",
      "max-width:min(380px, calc(100vw - 32px))",
      "background:rgba(10,22,36,0.94)", "color:#F6F2E8",
      "border:1px solid rgba(230,203,152,0.28)", "border-radius:14px",
      "padding:14px 16px", "box-shadow:0 16px 40px rgba(0,0,0,0.42)",
      "backdrop-filter:blur(12px)", "-webkit-backdrop-filter:blur(12px)",
      "font-family:'Plus Jakarta Sans',system-ui,sans-serif", "font-size:12.5px", "line-height:1.45"
    ].join(";");
    bar.innerHTML =
      '<div style="color:rgba(246,242,232,0.86);margin-bottom:10px;">' + copy.txt + '</div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end;">' +
        '<button type="button" id="adConsDec" style="background:transparent;color:rgba(246,242,232,0.78);border:1px solid rgba(230,203,152,0.26);border-radius:999px;padding:7px 14px;font-size:12px;cursor:pointer;min-height:34px;">' + copy.dec + '</button>' +
        '<button type="button" id="adConsAcc" style="background:#E6CB98;color:#0A1624;border:1px solid #E6CB98;border-radius:999px;padding:7px 16px;font-size:12px;font-weight:600;cursor:pointer;min-height:34px;">' + copy.acc + '</button>' +
      '</div>';

    document.body.appendChild(bar);
    document.getElementById("adConsAcc").addEventListener("click", function () {
      applyConsent(true);
      bar.remove();
    });
    document.getElementById("adConsDec").addEventListener("click", function () {
      applyConsent(false);
      bar.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(showConsentPill, 1400); });
  } else {
    setTimeout(showConsentPill, 1400);
  }
})();
