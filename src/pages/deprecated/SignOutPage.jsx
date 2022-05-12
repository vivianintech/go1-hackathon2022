import React from "react";
import SignOutForm from "../../components/Forms/SignOutForm";

const SignOutPage = () => {
  return (
    <div className="signOut">
      <h2>Are you sure you want to sign out?</h2>
      <SignOutForm />
    </div>
  );
};

export default SignOutPage;
