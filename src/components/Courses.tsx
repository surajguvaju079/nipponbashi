import {
  japaneseLanguageCourses,
  preparationCourses,
  type Course,
} from "@/data/courses";

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <p className="course-level">{course.level}</p>
      <h3>{course.title}</h3>
      <div className="course-audience">
        <span>For</span>
        <p>{course.audience}</p>
      </div>
      <div className="course-learning">
        <span>What you&apos;ll learn</span>
        <ul>
          {course.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="course-outcome">
        <span>Learning outcome</span>
        <p>{course.outcome}</p>
      </div>
      <a href="#contact" className="cta-small">
        Ask about this course <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">コース — Courses</span>
          <h2>Japanese Language Courses</h2>
          <p>
            Follow a clear learning path from foundational scripts and grammar
            to intermediate reading, listening, and practical communication.
          </p>
        </div>
        <div className="course-grid reveal">
          {japaneseLanguageCourses.map((course) => (
            <CourseCard key={course.level} course={course} />
          ))}
        </div>

        <div className="preparation-block" id="preparation">
          <div className="section-head reveal">
            <span className="kicker">試験対策 — Focused study</span>
            <h2>Preparation &amp; Japan Readiness</h2>
            <p>
              Targeted preparation is kept separate from the main language
              pathway so students can choose support that matches their goal.
            </p>
          </div>
          <div className="course-grid course-grid--preparation reveal">
            {preparationCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
