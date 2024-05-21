import * as React from 'react';

import { OfferingContentWrapper } from './OfferingContent.style';

import { motion } from 'framer-motion';

type Props = {
  isActive: boolean;
};

const StaticSites = ({ isActive }: Props): React.ReactElement => {
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
          Minim culpa ut deserunt sunt est excepteur consequat. Qui proident
          Lorem do sit eu. Duis cillum ipsum amet deserunt. Sint laboris
          adipisicing laborum exercitation velit duis excepteur dolore tempor do
          nostrud do. Aliqua ut anim magna nisi laboris excepteur non aliqua in
          eu duis esse magna. Culpa et non qui minim et in reprehenderit officia
          culpa fugiat Lorem. Consequat exercitation anim qui do sint ullamco
          minim dolore adipisicing aute aliqua.
        </p>
        <p>
          Id deserunt esse excepteur occaecat. Excepteur Lorem et fugiat
          consectetur duis dolore duis minim occaecat culpa labore. Aliqua ex
          commodo eu anim amet dolore magna proident. Consectetur quis aute
          adipisicing exercitation quis sint officia esse minim. Ad exercitation
          voluptate Lorem irure qui amet in aliquip officia sit et anim eiusmod.
        </p>
        {isFormVisible ? (
          <motion.div
            className="form-content"
            initial={{ opacity: 0 }}
            animate={isFormVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Foo
          </motion.div>
        ) : (
          <button onClick={() => setIsFormVisible(true)}>
            <h3>Ready to launch your static site?</h3>
          </button>
        )}
      </div>
    </OfferingContentWrapper>
  );
};

export { StaticSites };
