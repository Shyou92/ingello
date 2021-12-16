import dev from './Development.module.scss';

import Container from '../../UI/Container/Container';
import H1 from '../../UI/H1/H1';
import H2 from '../../UI/H2/H2';

function Development() {
  return (
    <section className={dev.section}>
      <Container>
        <div className={dev.wrapperText}>
          <div className={dev.wrapper}>
            <H1 className={dev.header}>
              разработка <br /> веб-сервисов <br />
              <span className={dev.subtext}> с гарантиями</span>
            </H1>
            <p className={dev.subheader}>
              Проектирование архитектуры Программирование Дизайн <br />
              Менеджмент Вёрстка Тестирование Бизнес-аналитика Креатив
            </p>
          </div>

          <H2 className={dev.secondHeader}>INGELLO / SYSTEMS</H2>
        </div>
      </Container>
    </section>
  );
}

export default Development;
