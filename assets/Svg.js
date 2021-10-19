import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DropDown = props => {
  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none" {...props}>
      <Path
        d="M8.31348 11.3435L14.3135 17.3435L20.3135 11.3435"
        stroke="#151522"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const GoogleIcon = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8859 12.2613C22.8859 11.4459 22.8128 10.6618 22.6769 9.90906H11.8459V14.3575H18.035C17.7684 15.795 16.9582 17.0129 15.7403 17.8284V20.7138H19.4569C21.6314 18.7118 22.8859 15.7636 22.8859 12.2613Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 23.4998C14.9509 23.4998 17.5541 22.47 19.4568 20.7137L15.7402 17.8282C14.7105 18.5182 13.3932 18.9259 11.8459 18.9259C8.85068 18.9259 6.31546 16.903 5.41114 14.1848H1.56909V17.1644C3.46136 20.9228 7.35046 23.4998 11.8459 23.4998Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.41117 14.1851C5.18117 13.4951 5.05049 12.7581 5.05049 12.0001C5.05049 11.2422 5.18117 10.5051 5.41117 9.81512V6.83557H1.56913C0.790265 8.38807 0.345947 10.1444 0.345947 12.0001C0.345947 13.8558 0.790265 15.6122 1.56913 17.1647L5.41117 14.1851Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 5.07386C13.5343 5.07386 15.0502 5.65409 16.242 6.79364L19.5405 3.49523C17.5489 1.63955 14.9457 0.5 11.8459 0.5C7.35046 0.5 3.46136 3.07705 1.56909 6.83545L5.41114 9.815C6.31546 7.09682 8.85068 5.07386 11.8459 5.07386Z"
        fill="#EA4335"
      />
    </Svg>
  );
};

export const FacebookIcon = props => {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none" {...props}>
      <Path
        d="M15.438 3.32083H17.3226V0.140833C16.9974 0.0975 15.8793 0 14.577 0C11.8598 0 9.99846 1.65583 9.99846 4.69917V7.5H7V11.055H9.99846V20H13.6747V11.0558H16.5519L17.0086 7.50083H13.6739V5.05167C13.6747 4.02417 13.9603 3.32083 15.438 3.32083Z"
        fill="#007AFF"
      />
    </Svg>
  );
};

export const MailIcon = props => {
  return (
    <Svg width="31" height="21" viewBox="0 0 31 21" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 0C18.6274 0 24 4.25263 24 9.49851C24 14.7444 17.6406 18.8634 10.3681 18.3883C7.70922 21.1085 4.66783 21.0465 4.51201 20.8586C4.35619 20.6707 4.7425 20.5054 5.38145 19.5059C6.0204 18.5064 6.0204 17.4176 4.78304 16.6474L4.7034 16.6027L4.62171 16.5619C1.54057 15.1153 0 12.7609 0 9.49851C0 3.65377 5.37258 0 12 0ZM19.7804 0.502277C26.0021 0.603488 31 4.07282 31 9.57383C31 12.5898 29.6173 14.7935 26.852 16.1849L26.4926 16.3604L26.4163 16.4031C25.2305 17.1389 25.2305 18.1789 25.8428 19.1338C26.4551 20.0886 26.8253 20.2465 26.676 20.426C26.5267 20.6055 23.612 20.6647 21.0639 18.0662C20.5147 18.1019 19.971 18.1104 19.4353 18.0933C23.0637 16.2416 25.5 13.1378 25.5 9.49851C25.5 5.92825 23.4481 2.80265 20.2847 0.805168L19.9941 0.626706L19.7804 0.502277Z"
        fill="#007AFF"
      />
    </Svg>
  );
};
