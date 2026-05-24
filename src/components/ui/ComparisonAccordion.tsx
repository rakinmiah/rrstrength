"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { compareColumns, compareRows } from "@/content/pricing";

function CellValue({ value }: { value: string }) {
  if (value === "✓")
    return (
      <>
        <Icon name="check" size={18} className="mx-auto text-success" />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === "✗")
    return (
      <>
        <Icon name="x" size={18} className="mx-auto text-muted" />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="text-fg">{value}</span>;
}

export function ComparisonAccordion() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-10 border-t border-line pt-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-left font-display text-h4 uppercase text-fg"
      >
        Compare what&apos;s included
        <Icon
          name="chevron"
          size={22}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div id={panelId} className="overflow-x-auto pb-2">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="py-3 pr-4 font-medium text-muted">
                  Feature
                </th>
                {compareColumns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-3 py-3 text-center font-display text-h4 uppercase text-fg"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature} className="border-b border-line">
                  <th
                    scope="row"
                    className="py-3 pr-4 text-left font-normal text-muted"
                  >
                    {row.feature}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="px-3 py-3 text-center">
                      <CellValue value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
