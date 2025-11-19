"use client";
import {
  Button,
  Container,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Octokit } from "@octokit/rest";
import { useState } from "react";
import { useAsync } from "react-use";

const OWNER = "kounoike";
const REPO = "webrtcjp-31-demo";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const state = useAsync(async () => {
    const octokit = new Octokit({
      userAgent: "webrtcjp-31-demo-app",
    });
    const ret = await octokit.issues.get({
      owner: OWNER,
      repo: REPO,
      issue_number: 6,
    });
    console.log(ret.data);
    return ret.data;
  }, []);

  const handleSubmit = () => {
    console.log("入力値:", inputValue);
    alert(`入力値: ${inputValue}`);
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Hello, Next.js!</Title>

        <Paper shadow="sm" p="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="テキスト入力"
              placeholder="何か入力してください"
              value={inputValue}
              onChange={(event) => setInputValue(event.currentTarget.value)}
            />
            <Button onClick={handleSubmit}>送信</Button>
          </Stack>
        </Paper>

        {state.loading && <Text>Loading...</Text>}
        {state.error && <Text c="red">Error: {String(state.error)}</Text>}
        {state.value && (
          <Paper shadow="sm" p="md" withBorder>
            <Stack gap="sm">
              <Title order={2}>{state.value.title}</Title>
              <Text>{state.value.body}</Text>
            </Stack>
          </Paper>
        )}
      </Stack>
    </Container>
  );
}
