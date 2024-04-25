import Person from '../Person';
import Team from '../Team';

test('классы "Person" and "Team" существуют', () => {
  expect(Person).toBeDefined();
  expect(Team).toBeDefined();
});

const team = new Team();

test('класс "Team" имеет свойство "members" с установленным объектом', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('экземпляр класса "Team" имеет генератор', () => {
  const result = () => [...team];
  expect(result).not.toThrow();
  expect(team[Symbol.iterator].constructor.name).toBe('GeneratorFunction');
  expect(result()).toEqual([...team.members]);
});