const axios = require('axios');
const nodemailer = require('nodemailer');

// Konfigurasi Jira
const JIRA_API_URL = 'https://jira.example.com/rest/api/2';
const JIRA_USERNAME = 'jira_username';
const JIRA_PASSWORD = 'jira_password';

// Konfigurasi email
const EMAIL_SERVICE = 'gmail';
const EMAIL_USERNAME = 'email_username';
const EMAIL_PASSWORD = 'email_password';

// Fungsi untuk mengambil data tiket dari Jira berdasarkan nomor tiket
async function getTicketData(ticketNumber) {
  try {
    const response = await axios.get(`${JIRA_API_URL}/issue/${ticketNumber}`, {
      auth: {
        username: JIRA_USERNAME,
        password: JIRA_PASSWORD,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Fungsi untuk mengirim email ke pengguna
async function sendEmail(to, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: EMAIL_USERNAME,
      to,
      subject,
      text: message,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
}

// Fungsi untuk memantau perubahan pada tiket dan mengirim email jika ada perubahan
async function watchTicket(ticketNumber, userEmail) {
  let ticketData = await getTicketData(ticketNumber);

  setInterval(async () => {
    const newTicketData = await getTicketData(ticketNumber);

    if (newTicketData !== null && newTicketData.fields.status !== ticketData.fields.status) {
      // Jika status tiket berubah, kirim email ke pengguna
      const subject = `Tiket ${ticketNumber} - ${newTicketData.fields.summary}`;
      const message = `Status tiket ${ticketNumber} telah berubah menjadi ${newTicketData.fields.status}`;
      await sendEmail(userEmail, subject, message);

      // Update data tiket
      ticketData = newTicketData;
    }
  }, 60000); // Periksa setiap 1 menit
}

// Contoh penggunaan
watchTicket('ABC-123', 'user@example.com');
