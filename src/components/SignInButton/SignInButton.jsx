import "./SignInButton.css"
import googleLogo from "./google-logo.png";
import githubLogo from "./github-logo.png";

function SignInButtons() {

  const handleGoogleLogin = () => {
    window.open("http://localhost:9000/auth/google", "_self")
 }

    return (
      <div className="button-container">
        <a  onClick={handleGoogleLogin} className="google-button">
          <img src={googleLogo} alt="Google Logo" className="logo" />
          Sign in with Google
        </a>
        <a href="/auth/github" className="github-button">
          <img src={githubLogo} alt="GitHub Logo" className="logo" />
          Sign in with GitHub
        </a>
      </div>
    );
  }

  export default SignInButtons;
  