interface INavigationArrow extends React.SVGProps<SVGSVGElement> {
  borderColor: string;
  fillColor: string;
}

const transitionStyle = { transition: "fill 0.15s ease-in-out" };

const NavigationArrow = (props: INavigationArrow) => {
  const { borderColor, fillColor, ...res } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...res}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.77641 20.758L22 11.879L2.77641 3L4.89045 11.879L2.77641 20.758Z"
        fill={fillColor}
        style={transitionStyle}
      />
      <path
        d="M22 11.879L22.2097 12.3329L23.1924 11.879L22.2097 11.4251L22 11.879ZM2.77641 20.758L2.29 20.6422L2.05159 21.6435L2.98606 21.2119L2.77641 20.758ZM2.77641 3L2.98607 2.54608L2.05159 2.11446L2.29001 3.11581L2.77641 3ZM4.89045 11.879L5.37686 11.9948L5.40443 11.879L5.37686 11.7632L4.89045 11.879ZM21.7903 11.4251L2.56675 20.3041L2.98606 21.2119L22.2097 12.3329L21.7903 11.4251ZM2.56675 3.45392L21.7903 12.3329L22.2097 11.4251L2.98607 2.54608L2.56675 3.45392ZM2.29001 3.11581L4.40405 11.9948L5.37686 11.7632L3.26281 2.88419L2.29001 3.11581ZM4.40405 11.7632L2.29 20.6422L3.26281 20.8738L5.37686 11.9948L4.40405 11.7632Z"
        fill={borderColor}
        style={transitionStyle}
      />
    </svg>
  );
};

export default NavigationArrow;
