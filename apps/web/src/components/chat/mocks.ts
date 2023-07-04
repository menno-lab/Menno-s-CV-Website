import { Message } from 'ai';

export const AI_MOCKS: Message[] = [
    { id: '1', role: 'user', content: 'Hello', createdAt: new Date() },
    { id: '2', role: 'system', content: 'Hi, how can I assist you today?', createdAt: new Date() },
    { id: '3', role: 'user', content: 'I need help with booking a flight', createdAt: new Date() },
    {
        id: '4',
        role: 'system',
        content: 'Of course! I can help you with that. Where would you like to fly from and to?',
        createdAt: new Date(),
    },
    { id: '5', role: 'user', content: 'I want to fly from New York to Los Angeles', createdAt: new Date() },
    { id: '6', role: 'system', content: 'Great! Can you please provide me with the date of your travel?', createdAt: new Date() },
    { id: '7', role: 'user', content: 'I plan to travel on July 15th', createdAt: new Date() },
    { id: '8', role: 'system', content: 'Alright. Let me check the available flights for you.', createdAt: new Date() },
    { id: '9', role: 'system', content: 'I found a few options for you. Here are the details:', createdAt: new Date() },
    {
        id: '10',
        role: 'system',
        content: 'Flight 1: Departure - New York (JFK) at 8:00 AM, Arrival - Los Angeles (LAX) at 11:00 AM',
        createdAt: new Date(),
    },
    {
        id: '11',
        role: 'system',
        content: 'Flight 2: Departure - New York (JFK) at 10:00 AM, Arrival - Los Angeles (LAX) at 1:00 PM',
        createdAt: new Date(),
    },
    { id: '12', role: 'user', content: 'I would like to book Flight 2', createdAt: new Date() },
    {
        id: '13',
        role: 'system',
        content:
            'Sure! To proceed with the booking, I need some additional information. Can you please provide me with your name and contact details?',
        createdAt: new Date(),
    },
    { id: '14', role: 'user', content: 'My name is John Doe and my phone number is 123-456-7890', createdAt: new Date() },
    {
        id: '15',
        role: 'system',
        content: 'Thank you, John Doe. Your flight is booked. You will receive a confirmation email shortly.',
        createdAt: new Date(),
    },
];
