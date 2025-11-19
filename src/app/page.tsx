"use client";
import { Octokit } from "@octokit/rest";
import { useAsync } from "react-use";

const OWNER = "kounoike";
const REPO = "webrtcjp-31-demo";

export default function Home() {
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

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {String(state.error)}</p>}
      {state.value && (
        <div>
          <h2>{state.value.title}</h2>
          <p>{state.value.body}</p>
        </div>
      )}
    </div>
  );
}
