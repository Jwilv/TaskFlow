
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    createdAt: number;
    status: string;
}

const seedData: SeedData = {
    entries: [
        {
            description: 'Test Pending',
            createdAt: Date.now(),
            status: 'pending'
        },
        {
            description: 'Test In progress',
            createdAt: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            description: 'Test Completed',
            createdAt: Date.now() - 10000,
            status: 'finished'
        },
    ],
}