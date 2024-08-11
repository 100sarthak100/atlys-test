import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authConfig } from "../../data";
import TextInput from "../../components/TextInput/TextInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useAuth } from "../../components/AuthProvider/AuthProvider";

interface IAuth {
  onClose?: () => void;
}

const Auth = (props: IAuth) => {
  const { onClose } = props;

  const [authMode, setAuthMode] = useState("login");
  const config = authConfig[authMode];

  const { login } = useAuth();
  const navigate = useNavigate();

  const initializeFormData = () => {
    const initialState = {};

    config.fields.forEach((field) => {
      initialState[field.name] = "";
    });

    return initialState;
  };

  const [formData, setFormData] = useState(initializeFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${authMode} Form Data:`, formData);

    login();
    onClose?.();
    navigate("/");
  };

  const handleAuthMode = () => {
    setAuthMode(config.footerLink.action);
    setFormData(initializeFormData());
  };

  return (
    <div className="gradient-border">
      <div className="w-[450px] py-10 px-6 bg-customGray rounded-lg">
        <h2 className="mb-[4px] text-sm text-center text-titleGray font-medium">
          {config.title}
        </h2>
        <p className="mb-[45px] text-center text-lg text-white font-semibold">
          {config.subtitle}
        </p>

        <form onSubmit={handleSubmit}>
          {config.fields.map((field) => (
            <TextInput
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              icon={field.icon}
            />
          ))}

          <CustomButton title={config.buttonText} />
        </form>

        <div className="flex mt-3 gap-1 items-center">
          <span className="font-medium text-sm text-inputTextColor">
            {config.footerText}
          </span>

          <Link to="#" onClick={handleAuthMode}>
            <p className="text-inputLabelColor font-medium text-sm">
              {config.footerLink.text}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
