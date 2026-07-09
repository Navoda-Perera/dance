// content.js — All bilingual content for English and Sinhala

export const content = {
  en: {
    lang: "en",
    langLabel: "English",

    // Language Bar
    langBar: { en: "English", si: "සිංහල", ta: "தமிழ்" },

    // Hero
    hero: {
      tagline: "Your Stage. Your Style. Your Moment!",
      description:
        "A platform to showcase your talent, grow as an artist, and perform for audiences across Sri Lanka.",
      prize: "Grand Prize – LKR 100,000",
      weekly: "Weekly Winners & Special Rewards Throughout the Competition",
      reach: "Get recognized island-wide!",
      competition: "Freestyle Dance Competition",
      competitionSub: "Perform in any dance style. Compete as:",
      categories: ["Solo", "Duet", "Group (Maximum 5 Members)"],
      cta: "Register Now! →",
      deadline: "Submission Deadline: 25th July 2026",
    },

    // Help
    helpBanner: {
      label: "Need Help?",
      whatsapp: "WhatsApp",
      numbers: ["075 378 6640", "076 832 2045"],
    },

    // Accordion sections
    accordion: {
      rules: {
        title: "Competition Rules & Regulations",
        items: [
          "Open to participants 16 years and above.",
          "Entries can be submitted as Solo, Duet, or Group (Maximum 5 Members).",
          "All categories compete for the same prize. There will be no separate Solo, Duet, or Group winners.",
          "For Duet and Group entries, prize money will be transferred to one nominated member's bank account only.",
          "Any dance style is welcome.",
          "Participants must create their performance using ONE official Dance Verz competition track.",
          "Participants must submit their competition video before 25th July 2026. Late submissions will not be accepted.",
          "Videos must be 30–90 seconds and recorded in vertical (9:16) format.",
          "All submissions must follow the official competition guidelines.",
          "Fake engagement, plagiarism, offensive content, or copyright violations will result in disqualification.",
          "The organizers reserve the right to verify entries and make the final decision.",
        ],
      },
      scoring: {
        title: "Scoring System",
        intro:
          "All competition videos will be published on the official Dance Verz 2026 channels on:",
        platforms: ["YouTube", "Facebook", "TikTok"],
        engagementNote:
          "The winner will be decided based on the total audience engagement received on their official competition video across all three platforms.",
        votingNote: "Engagement will be calculated at the end of the voting period:",
        points: [
          { icon: "❤️", label: "1 Like", value: "1 Point" },
          { icon: "💬", label: "1 Comment", value: "3 Points" },
          { icon: "📤", label: "1 Share", value: "5 Points" },
        ],
        tableTitle: "Scoring Example",
        tableHeaders: ["Scoring Criteria", "YouTube", "Facebook", "TikTok"],
        tableRows: [
          ["❤️ 1 Like = 1 Point", "100 Likes × 1 = 100 Points", "1000 Likes × 1 = 1000 Points", "50 Likes × 1 = 50 Points"],
          ["💬 1 Comment = 3 Points", "120 Comments × 3 = 360 Points", "145 Comments × 3 = 435 Points", "10 Comments × 3 = 30 Points"],
          ["📤 1 Share = 5 Points", "10 Shares × 5 = 50 Points", "50 Shares × 5 = 250 Points", "2 Shares × 5 = 10 Points"],
          ["Platform Total", "510 Points", "1,685 Points", "90 Points"],
        ],
        grandTotal: "🏆 Grand Total: 2,285 Points",
        winnerTitle: "Winner Selection",
        winnerText:
          "Rankings will be determined based on the total audience engagement points collected from the official Dance Verz competition videos across YouTube, Facebook, and TikTok. The participant or team with the highest total score at the end of the competition period will be crowned the Dance Verz Champion 2026.",
      },
      video: {
        title: "Video Guidelines",
        items: [
          "Video duration must be 30–60 seconds.",
          "Record in vertical (9:16) format.",
          "Submit in high quality (minimum 1080p HD recommended).",
          "Use only audio from the official competition playlist in your video.",
        ],
        playlistTitle: "Competition Playlist",
        playlistNote: "Choose ONE track from the official playlist below:",
        tutorialTitle: "Tutorial Video",
        tutorialNote: "How to Record & Upload your competition video",
        tutorialPlaceholder: "Tutorial video will be added here",
      },
    },

    // Tracks
    tracks: [
      { n: "Track 01", genre: "Trending Pop" },
      { n: "Track 02", genre: "Hip-Hop / Urban" },
      { n: "Track 03", genre: "Sinhala Pop" },
      { n: "Track 04", genre: "Tamil Dance" },
      { n: "Track 05", genre: "Electronic / EDM" },
      { n: "Track 06", genre: "Baila / Folk" },
      { n: "Track 07", genre: "R&B / Soul" },
      { n: "Track 08", genre: "Afrobeats" },
      { n: "Track 09", genre: "K-Pop Inspired" },
      { n: "Track 10", genre: "Bollywood" },
    ],

    // Contact
    contact: {
      title: "Need Help?",
      subtitle:
        "Need assistance with registration or uploading your video? Our team is available to help with registration, video submissions, and any competition-related questions.",
      items: [
        { icon: "📞", label: "Contact Numbers", values: ["075 378 6640", "076 832 2045"] },
        { icon: "💬", label: "WhatsApp Support", values: ["075 378 6640", "076 832 2045"] },
        { icon: "📧", label: "Email Address", values: ["danceverz2026@gmail.com"] },
      ],
    },

    // Footer
    footer: {
      copy: "© 2026 Dance Verz – Hethen Live. All Rights Reserved.",
      tagline: "Your Stage. Your Style. Your Moment!",
    },
  },

  // ==================== SINHALA ====================
  si: {
    lang: "si",
    langLabel: "සිංහල",

    langBar: { en: "English", si: "සිංහල", ta: "தமிழ்" },

    hero: {
      tagline: "ඔබේ වේදිකාව. ඔබේ ස්ටයිල් එක. ඔබේ මොහොත!",
      description:
        "ඔබේ නර්තන දක්ෂතා ලොවට පෙන්වීමට, කලාකරුවෙකු ලෙස ඉදිරියට යාමට සහ ශ්‍රී ලංකාව පුරා ප්‍රේක්ෂකයින් අතර ඔබේ නම ගෙන යාමට හොඳම අවස්ථාව.",
      prize: "ප්‍රධාන ත්‍යාගය – රු. 100,000",
      weekly: "සෑම සතියකම ජයග්‍රාහකයින් සඳහා ත්‍යාග සහ විශේෂ තෑගි",
      reach: "දිවයින පුරා ඔබේ දක්ෂතාව හඳුන්වා දෙන්න!",
      competition: "Freestyle Dance Competition",
      competitionSub: "ඔබ කැමති ඕනෑම නර්තන ශෛලියකින් තරඟ කරන්න. තරඟ කළ හැකි ආකාර:",
      categories: ["තනි (Solo)", "යුගල (Duet)", "කණ්ඩායම් (උපරිම සාමාජිකයින් 5 දෙනෙක්)"],
      cta: "දැන් ලියාපදිංචි වන්න! →",
      deadline: "ඉදිරිපත් කිරීමේ අවසන් දිනය: 2026 ජූලි 25",
    },

    helpBanner: {
      label: "උදව් අවශ්‍යද?",
      whatsapp: "WhatsApp",
      numbers: ["075 378 6640", "076 832 2045"],
    },

    accordion: {
      rules: {
        title: "තරඟ නීති සහ කොන්දේසි",
        items: [
          "වයස අවුරුදු 16 හෝ ඊට වැඩි ඕනෑම අයෙකුට සහභාගි විය හැක.",
          "Solo, Duet හෝ Group ලෙස තරඟ කළ හැක.",
          "සියලුම තරඟකරුවන් එකම ත්‍යාග සඳහා තරඟ කරයි. Solo, Duet, Group ලෙස වෙන වෙනම ජයග්‍රාහකයින් නොමැත.",
          "Duet හා Group ඇතුළත් කිරීම් සඳහා, ත්‍යාග මුදල් නිතිපතා නම් කළ සාමාජිකයෙකුගේ බැංකු ගිණුමට පමණක් හස්තාන්තරණය කෙරේ.",
          "ඕනෑම නර්තන ශෛලියක් භාවිතා කළ හැක.",
          "නිල තරඟ Playlist එකේ ගීතයක් භාවිතා කර නිර්මාණාත්මක නර්තනයක් ඉදිරිපත් කළ යුතුය.",
          "වීඩියෝව 2026 ජූලි 25 ට පෙර ඉදිරිපත් කළ යුතුය. ප්‍රමාදෙන් ඉදිරිපත් කිරීම් භාර ගනු නොලැබේ.",
          "වීඩියෝව තත්පර 30 සිට 90 දක්වා සහ Vertical (9:16) ආකාරයෙන් පටිගත කළ යුතුය.",
          "නිල වීඩියෝ ඉදිරිපත් කිරීමේ උපදෙස් අනුගමනය කරන්න.",
          "ව්‍යාජ Likes, Comments, Shares, පිටපත් කිරීම (Plagiarism), අපහාසාත්මක අන්තර්ගතය හෝ Copyright උල්ලංඝනය කිරීම තහනම් අතර දඩ ලකුණු පොල්ලට ලක් වේ.",
          "සියලුම වීඩියෝ සහ තොරතුරු සත්‍යාපනය කිරීමේ අයිතිය සංවිධායකයන් සතු අතර අවසාන තීරණය සංවිධායක මණ්ඩලය විසින් ගනු ලැබේ.",
        ],
      },
      scoring: {
        title: "ලකුණු ලබාදීමේ ක්‍රමය",
        intro:
          "සියලුම තරඟ වීඩියෝ නිල Dance Verz 2026 නාලිකා හරහා ප්‍රකාශිත කෙරේ:",
        platforms: ["YouTube", "Facebook", "TikTok"],
        engagementNote:
          "ජයග්‍රාහකයා තෝරා ගනු ලබන්නේ ඔවුන්ගේ නිල තරඟ වීඩියෝ හරහා ලැබෙන සම්පූර්ණ ප්‍රේක්ෂක නිරත වීම මත පදනම්ව ය.",
        votingNote: "ඡන්ද කාලය අවසානයේ නිරතවීම ගණනය කෙරේ:",
        points: [
          { icon: "❤️", label: "Like 1", value: "ලකුණු 1" },
          { icon: "💬", label: "Comment 1", value: "ලකුණු 3" },
          { icon: "📤", label: "Share 1", value: "ලකුණු 5" },
        ],
        tableTitle: "ලකුණු ගණනය කිරීමේ උදාහරණය",
        tableHeaders: ["ලකුණු නිර්ණායකය", "YouTube", "Facebook", "TikTok"],
        tableRows: [
          ["❤️ Like 1 = ලකුණු 1", "Likes 100 × 1 = ලකුණු 100", "Likes 1000 × 1 = ලකුණු 1000", "Likes 50 × 1 = ලකුණු 50"],
          ["💬 Comment 1 = ලකුණු 3", "Comments 120 × 3 = ලකුණු 360", "Comments 145 × 3 = ලකුණු 435", "Comments 10 × 3 = ලකුණු 30"],
          ["📤 Share 1 = ලකුණු 5", "Shares 10 × 5 = ලකුණු 50", "Shares 50 × 5 = ලකුණු 250", "Shares 2 × 5 = ලකුණු 10"],
          ["Platform Total", "ලකුණු 510", "ලකුණු 1,685", "ලකුණු 90"],
        ],
        grandTotal: "🏆 සම්පූර්ණ ලකුණු: 2,285",
        winnerTitle: "ජයග්‍රාහකයා තෝරන ආකාරය",
        winnerText:
          "YouTube, Facebook සහ TikTok හරහා ලබාගත් නිල Dance Verz තරඟ වීඩියෝවල සම්පූර්ණ ප්‍රේක්ෂක නිරතවීම් ලකුණු මත ශ්‍රේණිගත කිරීම සිදු කෙරේ. තරඟ කාලය අවසානයේ වැඩිම ලකුණු ලබාගත් තරඟකරු හෝ කණ්ඩායම Dance Verz Champion 2026 ලෙස කිරුළු පළඳිනු ලැබේ.",
      },
      video: {
        title: "වීඩියෝ සඳහා උපදෙස්",
        items: [
          "වීඩියෝ කාලය තත්පර 30 – 60 අතර විය යුතුය.",
          "Vertical (9:16) ආකාරයෙන් පටිගත කළ යුතුය.",
          "අවම වශයෙන් 1080p HD ගුණාත්මකභාවයෙන් වීඩියෝව ඉදිරිපත් කිරීම නිර්දේශ කෙරේ.",
          "නිල Competition Playlist හි ගීතයක් පමණක් භාවිතා කළ යුතුය.",
        ],
        playlistTitle: "Competition Playlist",
        playlistNote: "නිල Playlist එකෙන් ගීතයක් තෝරා ගන්න:",
        tutorialTitle: "Tutorial Video",
        tutorialNote: "වීඩියෝව පටිගත කර Upload කරන ආකාරය",
        tutorialPlaceholder: "Tutorial Video මෙහි ඇතුළත් කෙරේ",
      },
    },

    tracks: [
      { n: "ගීත 01", genre: "ජනප්‍රිය පොප්" },
      { n: "ගීත 02", genre: "හිප්-හොප් / නාගරික" },
      { n: "ගීත 03", genre: "සිංහල පොප්" },
      { n: "ගීත 04", genre: "දමිළ නර්තන" },
      { n: "ගීත 05", genre: "ඉලෙක්ට්‍රොනික / EDM" },
      { n: "ගීත 06", genre: "බයිලා / ජන" },
      { n: "ගීත 07", genre: "R&B / සෝල්" },
      { n: "ගීත 08", genre: "අෆ්‍රෝබීට්ස්" },
      { n: "ගීත 09", genre: "K-Pop ආභාසය" },
      { n: "ගීත 10", genre: "බොලිවුඩ්" },
    ],

    contact: {
      title: "උදව් අවශ්‍යද?",
      subtitle:
        "ලියාපදිංචි වීම, වීඩියෝ Upload කිරීම හෝ තරඟය සම්බන්ධ ඕනෑම ගැටලුවක් සඳහා අප හා සම්බන්ධ වන්න.",
      items: [
        { icon: "📞", label: "දුරකථන අංක", values: ["075 378 6640", "076 832 2045"] },
        { icon: "💬", label: "WhatsApp", values: ["075 378 6640", "076 832 2045"] },
        { icon: "📧", label: "Email", values: ["danceverz2026@gmail.com"] },
      ],
    },

    footer: {
      copy: "© 2026 Dance Verz – Hethen Live. සියලු හිමිකම් ඇවිරිණි.",
      tagline: "ඔබේ වේදිකාව. ඔබේ ස්ටයිල් එක. ඔබේ මොහොත!",
    },
  },
};
