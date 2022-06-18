export const Greeter = (name: string) => `Hello ${name}`;

export const asycGreeter = async (name: string) => Promise.resolve(`Hello ${name}`);
