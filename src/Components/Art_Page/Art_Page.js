import React from 'react';
import { useParams } from 'react-router-dom';
import './Art_Page.css';

// Base de datos de artículos con autores y abstracts reales
const articles = [
  {
    id: '1',
    title: 'User Experience Design for Social Robots: A Case Study in Integrating Embodiment',
    authors: ' Ana Corrales-Paredes, Diego Ortega Sanz, María-José Terrón-López, Verónica Egido-García',
    abstract:
      'Social robotics is an emerging field with a high level of innovation. For many years, it was a concept framed in the literature and theoretical approaches. Scientific and technological advances have made it possible for robots to progressively make their way into different areas of our society, and now, they are ready to make the leap out of the industry and extend their presence into our daily lives. In this sense, user experience plays a fundamental role in achieving a smooth and natural interaction between robots and humans. This research focused on the user experience approach in terms of the embodiment of a robot, centring on its movements, gestures, and dialogues. The aim was to investigate how the interaction between robotic platforms and humans takes place and what differential aspects should be considered when designing the robot tasks. To achieve this objective, a qualitative and quantitative study was conducted based on a real interview between several human users and the robotic platform. The data were gathered by recording the session and having each user complete a form. The results showed that participants generally enjoyed interacting with the robot and found it engaging, which led to greater trust and satisfaction. However, delays and errors in the robot’s responses caused frustration and disconnection. The study found that incorporating embodiment into the design of the robot improved the user experience, and the robot’s personality and behaviour were significant factors. It was concluded that robotic platforms and their appearance, movements, and way of communicating have a decisive influence on the user’s opinion and the way they interact.',
    keywords: ['Social Robots', 'Human-Robot Interaction', 'User Experience', 'Embodiment'],
    publicationDate: 'June 1, 2023',
    journal: 'Sensors',
    journalUrl: 'https://www.mdpi.com/1424-8220/23/11/5274',
  },
  {
    id: '2',
    title: 'Integration of a Social Robot in a Pedagogical and Logopedic Intervention with Children: A Case Study',
    authors: ' Verónica Egido-García, David Estévez, Ana Corrales-Paredes, María-José Terrón-López, Paloma-Julia Velasco-Quintana',
    abstract:
      'The effectiveness of social robots such as NAO in pedagogical therapies presents a challenge. There is abundant literature focused on therapies using robots with children with autism, but there is a gap to be filled in other educational different needs. This paper describes an experience of using a NAO as an assistant in a logopedic and pedagogical therapy with children with different needs. Even if the initial robot architecture is based on genericbehaviors, the loading and execution time for each specific requirement and the needs of each child in therapy, made it necessary to develop “Adaptive Behaviors”. These evolve into an adaptive architecture, appliedto the engineer–therapist–child interaction, requiring the engineer-programmer to be always present during the sessions. Benefits from the point of view of the therapist and the children and the acceptance of NAO in therapy are shown. A robot in speech-therapy sessions can play a positive role in several logopedic aspectsserving as a motivating factor for the children.Future works should be oriented in developing intelligent algorithms so as to eliminate the presence of the engineer-programmer in the sessions. Additional work proposals should consider deepening the psychological aspects of using humanoid robots in educational therapy.',
    keywords: [' NAO Robot', 'Child–Robot Interaction', 'Logopedic Therapy', 'Speech Therapy', 'Pedagogical Therapy', 'Adaptive Behavior Design'],
    publicationDate: 'November 13, 2020',
    journal: 'Sensors',
    journalUrl: 'https://www.mdpi.com/1424-8220/20/22/6483',
  },
  {
    id: '3',
    title: 'Waymarking in Social Robots: Environment Signaling Using Human–Robot Interaction',
    authors: ' Ana Corrales-Paredes, María Malfaz, Verónica Egido-García, Miguel A. Salichs',
    abstract:
      'Travellers use the term waymarking to define the action of posting signs, or waymarks, along a route. These marks are intended to be points of reference during navigation for the environment. In this research, we will define waymarking as the skill of a robot to signal the environment or generate information to facilitate localization and navigation, both for its own use and for other robots as well. We present an automated environment signaling system using human–robot interaction and radio frequency identification (RFID) technology. The goal is for the robot, through human–robot interaction, to obtain information from the environment and use this information to carry out the signaling or waymarking process. HRI will play a key role in the signaling process since this type of communication makes it possible to exchange more specific and enriching information. The robot uses common phrases such as “Where am I?” and “Where can I go?”, just as we humans do when we ask other people for information about the environment. It is also possible to guide the robot and “show” it the environment to carry out the task of writing the signs. The robot will use the information received to create, update, or improve the navigation data in the RFID signals. In this paper, the signaling process will be described, how the robot acquires the information for signals, writing and updating process and finally, the implementation and integration in a real social robot in a real indoor environment.',
    keywords: ['Human–robot interaction', 'Social robots', 'Waymarking', 'Radio frequency identification', 'RFID', 'Signaling', 'Navigation', 'Wayfinding', 'Topological','Indoor'],
    publicationDate: 'December 06, 2021',
    journal: 'Sensors',
    journalUrl: 'https://www.mdpi.com/1424-8220/21/23/8145',
  },
];

const Art_Page = () => {
  const { id } = useParams();
  const article = articles.find((art) => art.id === id);

  if (!article) {
    return <div className="error">Article not found. Please check the URL or select a valid article.</div>;
  }

  return (
    <div className="art-page">
      {/* Encabezado del artículo */}
      <header className="art-header">
        <h1 className="art-title">{article.title}</h1>
        <p className="art-authors">
          By: {article.authors} | Published on: {article.publicationDate} | Journal: {article.journal}
        </p>
      </header>

      {/* Resumen del artículo */}
      <section className="art-abstract-section">
        <h2>Abstract</h2>
        <p className="art-abstract">{article.abstract}</p>
      </section>

      {/* Palabras clave */}
      <section className="art-keywords-section">
        <h2>Keywords</h2>
        <ul className="art-keywords">
          {article.keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </section>

      {/* Botón de descarga */}
      <section className="art-download-section">
        <a
          href={article.journalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download Full Text (PDF)
        </a>
      </section>
    </div>
  );
};

export default Art_Page;
