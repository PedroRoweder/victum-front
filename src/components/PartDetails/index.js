import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Modules
import List from "~/components/List";
import Stepper from "~/components/Stepper";

// Icons
import checkWhite from "~/assets/icons/done-white.svg";
import checkBlack from "~/assets/icons/done-black.svg";
import trashWhite from "~/assets/icons/delete-white.svg";
import trashBlack from "~/assets/icons/delete-black.svg";
import pencilWhite from "~/assets/icons/pencil-white.svg";
import pencilBlack from "~/assets/icons/pencil-black.svg";
import arrowDown from "~/assets/icons/arrow-down-grey.svg";

// Styling
import {
  Check,
  Trash,
  AddNew,
  Pencil,
  getStyles,
  AddNewStep,
  EachOperation,
  PositioningArrows,
} from "./styles";

const PartDetails = ({ form, setForm }) => {
  const styles = getStyles();
  const [selected, setSelected] = useState();
  const [modifying, setModifying] = useState();
  const [operations, setOperations] = useState([]);
  const [temp, setTemp] = useState({ SKU: "", desc: "", operationList: [] });

  const handleOperationNameChange = (e, index) => {
    const obj = temp;
    obj.operationList[index].operationTitle = e.target.value;
    setTemp({ ...obj });
    setForm({ ...temp });
  };

  const handlePositionChange = (position, direction) => {
    const ActualPositions = form.operationList;
    let temporary;

    if (direction === "up") {
      temporary = ActualPositions[position];
      ActualPositions[position] = ActualPositions[position - 1];
      ActualPositions[position - 1] = temporary;
    } else if (direction === "down") {
      temporary = ActualPositions[position];
      ActualPositions[position] = ActualPositions[position + 1];
      ActualPositions[position + 1] = temporary;
    }

    setForm({ ...form, operationList: ActualPositions });
  };

  const handleDelete = (position) => {
    const temporary = form.operationList;

    temporary.splice(position, 1);

    setForm({ ...form, operationList: temporary });
  };

  const listOperations = () =>
    form.operationList.map((item, index) => (
      <div>
        <EachOperation
          onClick={() => {
            if (selected !== index && modifying === undefined) {
              setSelected(index);
            }
          }}
          selected={selected === index}
        >
          {selected === index && !modifying && (
            <PositioningArrows>
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => {
                    handlePositionChange(index, "up");
                    setSelected(index - 1);
                  }}
                >
                  <img
                    src={arrowDown}
                    alt="arrow up"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>
              )}
              {index !== form.operationList.length - 1 && (
                <button
                  type="button"
                  onClick={() => {
                    handlePositionChange(index, "down");
                    setSelected(index + 1);
                  }}
                >
                  <img src={arrowDown} alt="arrow down" />
                </button>
              )}
            </PositioningArrows>
          )}

          {modifying === index ? (
            <input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              type="text"
              name="operationTitle"
              onChange={(e) => handleOperationNameChange(e, index)}
              value={item?.operationTitle}
              style={styles.operationNameInput}
            />
          ) : (
            item.operationTitle
          )}

          <div style={styles.icons}>
            {modifying === index ? (
              <Check
                src={selected === index ? checkWhite : checkBlack}
                alt=""
                onClick={() => {
                  setModifying();
                }}
              />
            ) : (
              <Pencil
                src={selected === index ? pencilWhite : pencilBlack}
                alt=""
                onClick={() => {
                  setModifying(index);
                }}
              />
            )}

            <Trash
              src={selected === index ? trashWhite : trashBlack}
              alt=""
              onClick={() => {
                handleDelete(index);
                setSelected();
                setModifying();
              }}
            />
          </div>
        </EachOperation>
      </div>
    ));

  const createOperation = () =>
    form?.operationList?.length > 0
      ? setForm({
          ...form,
          operationList: [
            ...form.operationList,
            {
              operationTitle: form.operationList?.length,
              status: "TODO",
              steps: [],
            },
          ],
        })
      : setForm({
          ...form,
          operationList: [
            {
              operationTitle: form.operationList?.length,
              status: "TODO",
              steps: [],
            },
          ],
        });

  useEffect(() => {
    if (form.operationList?.length > 0) {
      setOperations(listOperations());
    } else {
      setOperations();
    }
    setTemp({ ...form });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, selected, modifying]);

  return (
    <>
      <List operationList={form.operationList} style={styles.list}>
        <div>{operations}</div>
        <AddNew type="button" onClick={() => createOperation()}>
          + Adicionar Nova Operação para <strong>{form.SKU}</strong>
        </AddNew>
      </List>
      {form.operationList[selected]?.steps.length > 0 ? (
        <Stepper>PLACEHOLDER</Stepper>
      ) : (
        selected !== undefined && (
          <AddNewStep>
            <button type="button">+ Adicionar novo passo...</button>
          </AddNewStep>
        )
      )}
    </>
  );
};

PartDetails.propTypes = {
  form: PropTypes.shape({
    SKU: PropTypes.string,
    desc: PropTypes.string,
    operationList: PropTypes.arrayOf({}),
  }).isRequired,
  setForm: PropTypes.func.isRequired,
};

export default PartDetails;
