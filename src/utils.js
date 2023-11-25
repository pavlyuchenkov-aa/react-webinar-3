const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Генерация уникального кода для новой записи на основе использованных кодов
 * @param {Set} usedCodes Набор использованных кодов
 * @param {number} codeGenerator Генератор кодов начинающийся с 1
 * @returns {number} возвращается уникальный код
 */
export function generateUniqueCode(usedCodes, codeGenerator) {
  let uniqueCode = codeGenerator;
  while (usedCodes.has(uniqueCode)) {
    uniqueCode++;
  }
  usedCodes.add(uniqueCode);
  return uniqueCode;
}

/**
 * Отображение "раз" или "раза" в зависимости от значения selectCount
 * @param {number} value значение selectCount
 * @returns {Boolean} 
 */
export function checkLastDigit(value) {
  if (([2, 3, 4].indexOf(value % 10) !== -1) 
    && (Math.floor((value % 100) / 10) !== 1))
  {
      return true;
  }

  return false;
}
