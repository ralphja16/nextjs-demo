const users = [
  { id: 1, first_name: 'Emmye', last_name: 'Cumesky', email: 'ecumesky0@mit.edu', gender: 'Female' },
  { id: 2, first_name: 'Avram', last_name: 'Dudleston', email: 'adudleston1@sina.com.cn', gender: 'Non-binary' },
  { id: 3, first_name: 'Lindy', last_name: 'Foad', email: 'lfoad2@creativecommons.org', gender: 'Female' },
  { id: 4, first_name: 'Albert', last_name: 'Erangey', email: 'aerangey3@oracle.com', gender: 'Female' },
  { id: 5, first_name: 'Sonnnie', last_name: 'Moreland', email: 'smoreland4@wired.com', gender: 'Female' },
  { id: 6, first_name: 'Maryann', last_name: 'Liepins', email: 'mliepins5@merriam-webster.com', gender: 'Male' },
  { id: 7, first_name: 'Itch', last_name: 'Pierse', email: 'ipierse6@homestead.com', gender: 'Female' },
  { id: 8, first_name: 'Carling', last_name: 'Plinck', email: 'cplinck7@bandcamp.com', gender: 'Male' },
  { id: 9, first_name: 'Staci', last_name: 'Haig', email: 'shaig8@taobao.com', gender: 'Female' },
  { id: 10, first_name: 'Horacio', last_name: 'Daine', email: 'hdaine9@go.com', gender: 'Female' },
  { id: 11, first_name: 'Linnell', last_name: 'Beckwith', email: 'lbeckwitha@dailymotion.com', gender: 'Female' },
  { id: 12, first_name: 'Prince', last_name: 'Derobert', email: 'pderobertb@meetup.com', gender: 'Male' },
  { id: 13, first_name: 'Traci', last_name: 'Bucham', email: 'tbuchamc@sogou.com', gender: 'Female' },
  { id: 14, first_name: 'Adelaida', last_name: 'Cinelli', email: 'acinellid@eventbrite.com', gender: 'Female' },
  { id: 15, first_name: 'Sunny', last_name: 'Pardy', email: 'spardye@cbsnews.com', gender: 'Female' },
  { id: 16, first_name: 'Sutherland', last_name: 'Pibsworth', email: 'spibsworthf@cafepress.com', gender: 'Male' },
  { id: 17, first_name: 'Imojean', last_name: 'Melan', email: 'imelang@wsj.com', gender: 'Male' },
  { id: 18, first_name: 'Iain', last_name: 'Menilove', email: 'imeniloveh@oaic.gov.au', gender: 'Female' },
  { id: 19, first_name: 'Willard', last_name: 'Pentycross', email: 'wpentycrossi@stumbleupon.com', gender: 'Male' },
  { id: 20, first_name: 'Gizela', last_name: 'Treend', email: 'gtreendj@ox.ac.uk', gender: 'Bigender' },
];

export default function handler(req, res) {
  res.status(200).json(users);
}
