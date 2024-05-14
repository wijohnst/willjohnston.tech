import * as React from 'react';
import { OfferingContentWrapper } from './OfferingContent.style';

import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isActive: boolean;
};

const initial = {
  opacity: 0,
};

const animate = {
  opacity: 1,
};

const transition = {
  delay: 0.5,
  type: 'spring',
};

const AppDev = ({ isActive }: Props): React.ReactElement => {
  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);

  return (
    <OfferingContentWrapper>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.p
              initial={initial}
              animate={animate}
              transition={transition}
            >
              Pariatur dolore ex laborum sit nisi nulla adipisicing consectetur.
              Exercitation occaecat pariatur Lorem ad pariatur eu deserunt
              labore nostrud ea tempor voluptate amet nulla. Occaecat velit
              ipsum voluptate amet labore elit laborum ut culpa elit do cillum
              sint. Proident deserunt minim non voluptate aliquip do incididunt.
            </motion.p>
            <motion.p
              initial={initial}
              animate={animate}
              transition={transition}
            >
              Aliqua anim sunt consequat est aliquip voluptate id deserunt
              aliqua non tempor sunt consectetur velit. Irure ex consequat dolor
              cillum pariatur proident id irure esse. Reprehenderit exercitation
              voluptate laboris non in nulla sunt amet Lorem deserunt voluptate
              ipsum excepteur tempor.
            </motion.p>
            {isFormVisible ? (
              <motion.div
                className="form-content"
                initial={{ visibility: 'hidden' }}
                animate={{ visibility: 'visible' }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="form-wrapper"
                  initial={{ height: '0px', visibility: 'hidden' }}
                  animate={{ height: 'auto', visibility: 'visible' }}
                  exit={{ height: '0px' }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3
                    initial={initial}
                    animate={animate}
                    exit={initial}
                    transition={{ duration: 1 }}
                    onClick={() => setIsFormVisible(false)}
                    role="button"
                  >
                    Contact Us
                  </motion.h3>
                  <motion.form
                    initial={initial}
                    animate={animate}
                    exit={initial}
                    transition={{ duration: 0.75 }}
                  >
                    <p>
                      Adipisicing non qui ea ullamco irure et occaecat velit
                      aliquip aliquip qui ad ex esse. Aliquip minim dolor
                      consectetur velit culpa id. Eiusmod elit deserunt sint
                      duis minim. Proident irure est adipisicing excepteur
                      nostrud nostrud anim officia ullamco reprehenderit duis.
                      Sint amet velit do aliquip minim magna reprehenderit sunt
                      amet cupidatat nostrud. Commodo proident tempor
                      adipisicing ipsum deserunt. Exercitation ullamco excepteur
                      consequat sint adipisicing.
                    </p>
                    <label>Name</label>
                    <input type="text"></input>
                  </motion.form>
                </motion.div>
              </motion.div>
            ) : (
              <motion.button
                initial={initial}
                animate={animate}
                exit={initial}
                transition={transition}
                onClick={() => setIsFormVisible(true)}
              >
                <h3>Ready to build your app?</h3>
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>
    </OfferingContentWrapper>
  );
};

export { AppDev };
