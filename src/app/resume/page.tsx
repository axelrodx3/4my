import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { siteConfig } from '@/config/site';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      <SmoothScroll />
      <Navigation />
      <div className="pt-20">
        <div className="container-max section-padding py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
              {siteConfig.name}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-soft mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multidisciplinary Artist & Creative Professional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Education */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Education</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-black">{siteConfig.education.degree}</h3>
                  <p className="text-primary-pink font-medium">{siteConfig.education.school}</p>
                  <p className="text-gray-600">{siteConfig.education.year}</p>
                </div>
              </section>

              {/* Professional Experience */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Professional Experience</h2>
                <div className="space-y-6">
                  {siteConfig.experience.map((job, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-black">{job.title}</h3>
                          <p className="text-primary-pink font-medium">{job.company}</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-gray-600">{job.period}</p>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Accomplishments */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Exhibitions & Accomplishments</h2>
                <div className="space-y-4">
                  {siteConfig.accomplishments.map((accomplishment, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-pink rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{accomplishment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Skills & Techniques</h2>
                <div className="space-y-3">
                  {siteConfig.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Contact</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> {siteConfig.contact.email}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> {siteConfig.contact.phone}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {siteConfig.contact.location}
                  </p>
                </div>
              </section>

              {/* Artistic Mentors */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-black mb-6">Artistic Mentors</h2>
                <div className="space-y-4">
                  {siteConfig.mentors.map((mentor, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-black">{mentor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{mentor.title}</p>
                      <p className="text-xs text-gray-500">{mentor.email}</p>
                      <p className="text-xs text-gray-500">{mentor.phone}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
