/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */

import { ModelRow } from "../../../interfaces/Cost";

export const costs: ModelRow[] = [
  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-13b-Instruct-hf",
    },
    cost: {
      prompt_token: 0.000000225,
      completion_token: 0.000000225,
    },
  },

  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-34b-Instruct-hf",
    },
    cost: {
      prompt_token: 0.000000776,
      completion_token: 0.000000776,
    },
  },

  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-70b-Instruct-hf",
    },
    cost: {
      prompt_token: 0.0000009,
      completion_token: 0.0000009,
    },
  },

  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-7b-Instruct-hf",
    },
    cost: {
      prompt_token: 0.0000002,
      completion_token: 0.0000002,
    },
  },

  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-70b-chat-hf",
    },
    cost: {
      prompt_token: 0.0000009,
      completion_token: 0.0000009,
    },
  },

  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-13b-chat-hf",
    },
    cost: {
      prompt_token: 0.000000225,
      completion_token: 0.000000225,
    },
  },

  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-7b-chat-hf",
    },
    cost: {
      prompt_token: 0.0000002,
      completion_token: 0.0000002,
    },
  },

  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-llama-2-7b",
    },
    cost: {
      prompt_token: 0.0000002,
      completion_token: 0.0000002,
    },
  },

  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-Llama2-13b",
    },
    cost: {
      prompt_token: 0.000000225,
      completion_token: 0.000000225,
    },
  },

  {
    model: {
      operator: "equals",
      value: "togethercomputer/Llama-2-7B-32K-Instruct",
    },
    cost: {
      prompt_token: 0.0000002,
      completion_token: 0.0000002,
    },
  },
];
