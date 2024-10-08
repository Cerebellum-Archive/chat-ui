import { env as envPublic } from "$env/dynamic/public";

export const proxy = envPublic.PUBLIC_FAST_API_SERVER;
