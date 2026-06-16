import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        const { name, email, role, message } = data;

        if (!name || !email || !role) {
            return NextResponse.json(
                { error: 'Name, email, and role are required.' },
                { status: 400 }
            );
        }

        // TODO: Connect to your backend service here
        // Examples:
        //   await sendEmail({ to: 'info@aclnonsurgical.com', subject: `New enquiry from ${name}`, body: message });
        //   await db.collection('enquiries').insertOne({ name, email, role, message, createdAt: new Date() });
        //   await fetch('https://your-backend.com/api/enquiries', { method: 'POST', body: JSON.stringify(data) });

        console.log('Contact form submission:', { name, email, role, message });

        return NextResponse.json({ success: true, message: 'Enquiry received.' });
    } catch {
        return NextResponse.json(
            { error: 'Failed to process enquiry.' },
            { status: 500 }
        );
    }
}
