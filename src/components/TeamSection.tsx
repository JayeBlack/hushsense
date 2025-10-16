import { Button } from '@/components/ui/button';
import { Github, Linkedin, MapPin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Elkanah Ametsitsi',
      role: 'Founder, Technical Lead & Onchain Analyst',
      location: 'Ghana',
      bio: 'Passionate about decentralized solutions for Africa and beyond. Leading the technical vision and blockchain architecture.',
      avatar: 'EA',
  github: 'https://github.com/Elkanah-Qanx',
  linkedin: 'https://www.linkedin.com/in/elkanah-ametsitsi/',
    },
    {
      name: 'Jeremiah Boateng',
      role: 'Smart Contract & Web Developer',
      location: 'Ghana',
      bio: 'Specializes in backend development and blockchain technology. Expert in building scalable smart contract systems.',
      avatar: 'JB',
  github: 'https://github.com/JayeBlack',
  linkedin: 'https://www.linkedin.com/in/jeremiah-boateng/',
    },
    // Kasser-Tee removed from team
    {
      name: 'Paul Botchwey',
      role: 'Mobile Application Developer',
      location: 'Ghana',
      bio: 'Over three years of experience in mobile app development. Leading the development of the HushSense mobile app.',
      avatar: 'PB',
  github: 'https://github.com/Codernointed',
  linkedin: 'https://www.linkedin.com/in/paulbotchwey/',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meet the{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                HushSense Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate team of developers and innovators from Ghana, building solutions for the world.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border/20 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-smooth text-center"
              >
                {/* Avatar */}
                {member.name === 'Elkanah Ametsitsi' ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="/images/98cc1389-3007-4ee3-ab53-6b3efe90028e.png"
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : member.name === 'Jeremiah Boateng' ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="/images/31ea6491-23f9-43ca-afe6-5ba4c6feb4fb.png"
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : member.name === 'Paul Botchwey' ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="/images/69981f9a-bd5b-4c1f-aa7e-fc901d0314b9.png"
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                )}
                
                {/* Name & Role */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </div>
                
                {/* Location */}
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {member.location}
                </div>
                
                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.github ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-smooth"
                    >
                      <Github className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    <button className="p-2 rounded-lg bg-muted/10 text-muted-foreground" disabled>
                      <Github className="h-4 w-4" />
                    </button>
                  )}

                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-smooth"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    <button className="p-2 rounded-lg bg-muted/10 text-muted-foreground" disabled>
                      <Linkedin className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn About Our Mission</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;