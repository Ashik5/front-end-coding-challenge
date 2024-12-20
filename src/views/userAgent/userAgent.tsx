// pages/user-agent.tsx

import React from "react";
import { BackToHome } from "@/components/backToHome/backToHome";

interface UserAgentProps {
  userAgent: string;
}

const UserAgentPage: React.FC<UserAgentProps> = ({ userAgent }) => {
  return (
    <div>
      <BackToHome />

      {userAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const userAgent = context.req.headers["user-agent"] || null;

  return {
    props: {
      userAgent,
    },
  };
};

export default UserAgentPage;
