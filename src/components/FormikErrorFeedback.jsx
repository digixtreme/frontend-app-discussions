import React from 'react';
import PropTypes from 'prop-types';

import { getIn, useFormikContext } from 'formik';

import { Form, TransitionReplace } from '@edx/paragon';

const FormikErrorFeedback = ({ name }) => {
  const {
    touched,
    errors,
  } = useFormikContext();
  const fieldTouched = getIn(touched, name);
  const fieldError = getIn(errors, name);

  return (
    <TransitionReplace>
      {fieldTouched && fieldError
        ? (
          <Form.Control.Feedback type="invalid" hasIcon={false} key={`${name}-error-feedback`}>
            {fieldError}
          </Form.Control.Feedback>
        )
        : (
          <React.Fragment key={`${name}-no-error-feedback`} />
        )}
    </TransitionReplace>
  );
};

FormikErrorFeedback.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikErrorFeedback;
