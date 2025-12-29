import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...\n');

  // Create default admin user
  const passwordHash = await bcrypt.hash('admin123', 10);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@havenbridge.com' },
    update: {},
    create: {
      email: 'admin@havenbridge.com',
      fullName: 'System Administrator',
      passwordHash,
      role: 'SUPER_ADMIN',
    },
  });

  console.log('✓ Created admin user:', admin.email);

  // Sample Appointments
  const appointments = [
    {
      fullName: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      serviceType: 'Personal Care',
      preferredDate: new Date('2025-01-15'),
      preferredTime: '10:00 AM',
      message: 'Looking for personal care assistance for my elderly mother.',
      status: 'PENDING' as const,
    },
    {
      fullName: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 234-5678',
      serviceType: 'Skilled Nursing',
      preferredDate: new Date('2025-01-18'),
      preferredTime: '2:00 PM',
      message: 'Need skilled nursing care for post-surgery recovery.',
      status: 'CONFIRMED' as const,
    },
    {
      fullName: 'Robert Johnson',
      email: 'robert.j@email.com',
      phone: '+1 (555) 345-6789',
      serviceType: 'Companion Care',
      preferredDate: new Date('2025-01-20'),
      preferredTime: '9:00 AM',
      message: 'Companion care needed for my father who lives alone.',
      status: 'PENDING' as const,
    },
    {
      fullName: 'Sarah Williams',
      email: 'sarah.w@email.com',
      phone: '+1 (555) 456-7890',
      serviceType: 'Physical Therapy',
      preferredDate: new Date('2025-01-22'),
      preferredTime: '11:00 AM',
      message: 'Physical therapy sessions needed after hip replacement.',
      status: 'COMPLETED' as const,
    },
    {
      fullName: 'David Brown',
      email: 'david.brown@email.com',
      phone: '+1 (555) 567-8901',
      serviceType: 'Respite Care',
      preferredDate: new Date('2025-01-25'),
      preferredTime: '1:00 PM',
      message: 'Need respite care for weekend relief.',
      status: 'CONFIRMED' as const,
    },
  ];

  for (const appointment of appointments) {
    await prisma.appointment.create({ data: appointment });
  }
  console.log(`✓ Created ${appointments.length} sample appointments`);

  // Sample Career Applications
  const careerApplications = [
    {
      fullName: 'Jennifer Martinez',
      email: 'jennifer.m@email.com',
      phone: '+1 (555) 678-9012',
      positionApplied: 'Registered Nurse',
      resumePath: '/uploads/resumes/jennifer_martinez_resume.pdf',
      message: 'RN with 5 years of home health experience. Passionate about elderly care.',
      status: 'PENDING' as const,
    },
    {
      fullName: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 789-0123',
      positionApplied: 'Certified Nursing Assistant',
      resumePath: '/uploads/resumes/michael_chen_resume.pdf',
      message: 'CNA certified with 3 years experience in assisted living facilities.',
      status: 'REVIEWING' as const,
    },
    {
      fullName: 'Amanda Taylor',
      email: 'amanda.t@email.com',
      phone: '+1 (555) 890-1234',
      positionApplied: 'Physical Therapist',
      resumePath: '/uploads/resumes/amanda_taylor_resume.pdf',
      message: 'Licensed PT specializing in geriatric rehabilitation.',
      status: 'SHORTLISTED' as const,
    },
    {
      fullName: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '+1 (555) 901-2345',
      positionApplied: 'Home Health Aide',
      resumePath: '/uploads/resumes/james_wilson_resume.pdf',
      message: 'Compassionate caregiver with experience in dementia care.',
      status: 'PENDING' as const,
    },
    {
      fullName: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      phone: '+1 (555) 012-3456',
      positionApplied: 'Occupational Therapist',
      resumePath: '/uploads/resumes/lisa_anderson_resume.pdf',
      message: 'OT with 7 years experience in home-based therapy services.',
      status: 'REVIEWING' as const,
    },
    {
      fullName: 'Carlos Rodriguez',
      email: 'carlos.r@email.com',
      phone: '+1 (555) 123-4560',
      positionApplied: 'Licensed Practical Nurse',
      resumePath: '/uploads/resumes/carlos_rodriguez_resume.pdf',
      message: 'LPN with wound care certification and IV therapy experience.',
      status: 'PENDING' as const,
    },
  ];

  for (const application of careerApplications) {
    await prisma.careerApplication.create({ data: application });
  }
  console.log(`✓ Created ${careerApplications.length} sample career applications`);

  // Sample Contact Messages
  const messages = [
    {
      name: 'Patricia Davis',
      email: 'patricia.d@email.com',
      message: 'I would like to know more about your skilled nursing services. What insurance do you accept?',
      status: 'UNREAD' as const,
    },
    {
      name: 'Thomas Moore',
      email: 'thomas.moore@email.com',
      message: 'Can you provide 24/7 care for my mother who has Alzheimer\'s?',
      status: 'REPLIED' as const,
      adminReply: 'Yes, we offer 24/7 care services for patients with Alzheimer\'s. Our trained caregivers specialize in memory care. I\'ll have our care coordinator contact you to discuss your mother\'s specific needs.',
      repliedAt: new Date(),
    },
    {
      name: 'Emily White',
      email: 'emily.white@email.com',
      message: 'What are your rates for part-time companion care services?',
      status: 'UNREAD' as const,
    },
  ];

  for (const message of messages) {
    await prisma.contactMessage.create({ data: message });
  }
  console.log(`✓ Created ${messages.length} sample contact messages`);

  console.log('\n✅ Database seeding completed successfully!');
  console.log('\nDefault Admin Credentials:');
  console.log('Email: admin@havenbridge.com');
  console.log('Password: admin123');
  console.log('\n⚠️  IMPORTANT: Change this password after first login!\n');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
