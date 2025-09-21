'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

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
                I&apos;m a multidisciplinary artist and creative professional with a Bachelor&apos;s degree in Art from UCLA. 
                My practice spans traditional and contemporary techniques, from handmade paper making and ceramics 
                to alternative photographic processes and woodworking.
              </p>
              
              <p>
                With extensive experience in art restoration, bookbinding, and creative assistance, I bring a unique 
                perspective to every project. My work is grounded in traditional craftsmanship while embracing 
                innovative approaches to material and process.
              </p>
              
              <p>
                Currently working as an Associate at Pinacoteca Picture Props, I specialize in mending fragile, 
                damaged paintings and everyday objects, mastering color matching and precision techniques that 
                inform my artistic practice.
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
                My Practice
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteConfig.skills.map((skill, index) => (
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
