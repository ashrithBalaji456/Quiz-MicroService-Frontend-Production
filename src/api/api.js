import axios from "axios";

/**
 * API Gateway base URL
 * (Injected from environment variables)
 */
const GATEWAY_URL = import.meta.env.VITE_GATEWAY_URL;

/**
 * Quiz Service APIs
 * Gateway → quiz-service → /quiz/**
 */
export const quizApi = axios.create({
  baseURL: `${GATEWAY_URL}/quiz-service/quiz`,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Question Service APIs
 * Gateway → question-service → /question/**
 */
export const questionApi = axios.create({
  baseURL: `${GATEWAY_URL}/question-service/question`,
  headers: {
    "Content-Type": "application/json",
  },
});
