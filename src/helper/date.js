const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "Desember"
];

const today = new Date()

export const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}` 

export const dateNumber = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`

export const convertDate = (time) => {
  let dt = new Date(time)
  return `Pukul ${dt.getHours()}:${dt.getMinutes()}, ${dt.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`
}