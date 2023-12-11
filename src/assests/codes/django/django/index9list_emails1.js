export default function index9list_emails1(){
    return `from django.shortcuts import render
import imaplib
import email

def fetch_emails(request):
    # Connect to the IMAP server (Gmail)
    imap_server = imaplib.IMAP4_SSL('imap.gmail.com')

    # Login to your Gmail account
    username = 'redaesskouni@gmail.com'
    password = 'svytinnjlsojpdqc'
    imap_server.login(username, password)

    # Select the mailbox (INBOX) where you want to fetch emails from
    imap_server.select('INBOX')

    # Search for all email messages
    _, data = imap_server.search(None, 'ALL')
    email_ids = data[0].split()

    emails = []

    # Fetch and parse each email
    for email_id in email_ids:
        _, email_data = imap_server.fetch(email_id, '(RFC822)')
        raw_email = email_data[0][1]
        msg = email.message_from_bytes(raw_email)

        # Extract relevant information from the email
        email_subject = msg['Subject']
        email_sender = msg['From']
        email_date = msg['Date']

        emails.append({
            'subject': email_subject,
            'sender': email_sender,
            'date': email_date,
        })

    # Close the IMAP connection
    imap_server.logout()

    return render(request, 'email_list.html', {'emails': emails})`
}