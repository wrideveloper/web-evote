const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "Desember"
];

const today = new Date()

export const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}` 

export const dateNumber = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`