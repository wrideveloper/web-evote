const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "Desember"
];

const today = new Date()

export const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}` 
