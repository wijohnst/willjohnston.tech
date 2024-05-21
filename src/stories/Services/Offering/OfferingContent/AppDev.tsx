import * as React from 'react';
import { OfferingContentWrapper } from './OfferingContent.style';

import { motion } from 'framer-motion';

type Props = {
  isActive: boolean;
};

const AppDev = ({ isActive }: Props): React.ReactElement => {
  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <OfferingContentWrapper
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="offering-content">
        <p>
          Pariatur dolore ex laborum sit nisi nulla adipisicing consectetur.
          Exercitation occaecat pariatur Lorem ad pariatur eu deserunt labore
          nostrud ea tempor voluptate amet nulla. Occaecat velit ipsum voluptate
          amet labore elit laborum ut culpa elit do cillum sint. Proident
          deserunt minim non voluptate aliquip do incididunt.
        </p>
        <p>
          Aliqua anim sunt consequat est aliquip voluptate id deserunt aliqua
          non tempor sunt consectetur velit. Irure ex consequat dolor cillum
          pariatur proident id irure esse. Reprehenderit exercitation voluptate
          laboris non in nulla sunt amet Lorem deserunt voluptate ipsum
          excepteur tempor.
        </p>
        {isFormVisible ? (
          <motion.div
            className="form-content"
            initial={{ opacity: 0 }}
            animate={isFormVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-wrapper">
              <h3 onClick={() => setIsFormVisible(false)} role="button">
                Contact Me
              </h3>
              <form>
                <p>
                  Adipisicing non qui ea ullamco irure et occaecat velit aliquip
                  aliquip qui ad ex esse. Aliquip minim dolor consectetur velit
                  culpa id. Eiusmod elit deserunt sint duis minim. Proident
                  irure est adipisicing excepteur nostrud nostrud anim officia
                  ullamco reprehenderit duis. Sint amet velit do aliquip minim
                  magna reprehenderit sunt amet cupidatat nostrud. Commodo
                  proident tempor adipisicing ipsum deserunt. Exercitation
                  ullamco excepteur consequat sint adipisicing.
                </p>
                <label>Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <button type="submit">
                  <h4>submit</h4>
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <button onClick={() => setIsFormVisible(true)}>
            <h3>Ready to build your app?</h3>
          </button>
        )}
      </div>
    </OfferingContentWrapper>
  );
};

export { AppDev };
