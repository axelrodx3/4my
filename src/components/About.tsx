'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-soft mb-8"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                I&apos;m a passionate creative professional dedicated to crafting elegant, 
                meaningful experiences through design. With a keen eye for detail and 
                a love for clean aesthetics, I specialize in creating visual narratives 
                that resonate with audiences.
              </p>
              
              <p>
                My work spans across digital design, photography, and brand identity, 
                always with a focus on the intersection of beauty and functionality. 
                I believe that great design has the power to inspire, connect, and 
                transform the way we experience the world.
              </p>
              
              <p>
                When I&apos;m not creating, you&apos;ll find me exploring new techniques, 
                seeking inspiration in unexpected places, and constantly pushing 
                the boundaries of what&apos;s possible in visual communication.
              </p>
            </div>

            {/* Skills/Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Web Design',
                  'Brand Identity',
                  'Photography',
                  'Digital Art',
                  'UI/UX Design',
                  'Creative Direction'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
            <button className="btn-primary">
              Let&apos;s Work Together
            </button>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder for your portrait or abstract graphic */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/20 to-primary-pink-soft/20 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-serif">M</span>
                  </div>
                  <p className="text-sm">Your Portrait Here</p>
                </div>
              </div>
              
              {/* Pink accent border */}
              <div className="absolute inset-0 border-2 border-primary-pink/30 rounded-lg"></div>
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-pink/60 rounded-full blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-pink-soft/60 rounded-full blur-sm"
            ></motion.div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="font-serif text-2xl md:text-3xl italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
          </blockquote>
          <cite className="block mt-6 text-primary-pink font-medium">
            — Steve Jobs
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
