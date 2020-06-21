import React from "react";
import chooseVariant from "ab-manager/chooseVariant";

const VariantChooser = ({ test, variations, ...props }) => {
  const [variant] = React.useState(chooseVariant(test));
  const Component = variations[variant];
  return (
    <React.Suspense fallback={<div>Loading variant</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default VariantChooser;
